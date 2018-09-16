import config from "../config";
import { combineEpics, ofType } from "redux-observable";
import {
  mapTo,
  switchMap,
  mergeMap,
  filter,
  from,
  catchError
} from "rxjs/operators";
import {
  FETCH_TODOS_ERROR,
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS
} from "../actions/types";

const fetchTodosEpic = (action$, state) =>
  action$.ofType(FETCH_TODOS_START).pipe(
    switchMap(async () => {
      const response = await fetch(config.todosUrl);
      const result = await response.json();

      return {
        type: FETCH_TODOS_SUCCESS,
        todos: result.data
      };
    }),
    catchError(err => {
      return {
        type: FETCH_TODOS_ERROR,
        error: err
      };
    })
  );

export const rootEpic = combineEpics(fetchTodosEpic);
