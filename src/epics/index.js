import config from "../config";
import { combineEpics, ofType } from "redux-observable";
import { mapTo, mergeMap, filter, catchError } from "rxjs/operators";
import {
  FETCH_TODOS_ERROR,
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS
} from "../actions/types";

const fetchTodosEpic = (action$, state$) =>
  action$.pipe(
    ofType(FETCH_TODOS_START),
    catchError(error =>
      of({
        type: FETCH_TODOS_ERROR,
        payload: error.xhr.response,
        error: true
      })
    ),
    mergeMap(async () => {
      const response = await fetch(config.todosUrl);
      const todos = await response.json();
      console.log(todos);
      return {
        type: FETCH_TODOS_SUCCESS,
        todos: todos.data
      };
    })
  );

export const rootEpic = combineEpics(fetchTodosEpic);
