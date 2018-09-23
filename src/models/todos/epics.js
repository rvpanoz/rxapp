import { ofType } from "redux-observable";

import { compose } from "ramda";

import { callServer } from "commons/rx-operators";

import config from "config";

import { fetchTodosStart, fetchTodosSuccess, fetchTodosError } from "./actions";

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

export default fetchTodosEpic;
