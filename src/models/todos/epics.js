import { ofType } from "redux-observable";
import { combineEpics } from "redux-observable";
import { Observable } from "rxjs/Observable";
import { compose } from "ramda";
import { callServer } from "commons/rx-operators";
import { map, mapTo, mergeMap } from "rxjs/operators";

//configuration
import config from "config";

import {
  addTodoStart,
  fetchTodosStart,
  fetchTodosSuccess,
  fetchTodosError
} from "./actions";

const addTodoEpic = action$ => action$.pipe(ofType(addTodoStart.type));

const fetchTodosEpic = action$ =>
  action$.pipe(
    ofType(fetchTodosStart.type),
    callServer({
      url: config.todosUrl,
      successActionCreator: compose(
        fetchTodosSuccess,
        ajaxResponse => ({
          todos: ajaxResponse.response.success && ajaxResponse.response.data
        })
      ),
      errorActionCreator: compose(
        fetchTodosError,
        error => ({ error })
      )
    })
  );

export default combineEpics(addTodoEpic, fetchTodosEpic);
