import config from "../config";
import { combineEpics, ofType } from "redux-observable";
import { mapTo, mergeMap, filter, catchError } from "rxjs/operators";
import {
  ADD_TODO,
  FETCH_TODOS_LOADING,
  FETCH_TODOS_ERROR,
  FETCH_TODOS_SUCCESS
} from "./types";

const fetchTodosSuccess = action => ({
  type: FETCH_TODOS_SUCCESS,
  loading: false,
  tracks
});

const fetchTodoEpic = (action$, state$) =>
  action$.pipe(
    ofType(FETCH_TODOS_LOADING),
    catchError(error =>
      of({
        type: FETCH_TODOS_ERROR,
        payload: error.xhr.response,
        error: true
      })
    ),
    mergeMap(async () => {
      const response = await fetch(config.URL);
      const todos = await response.json();
      return fetchTracksSuccess(todos);
    })
  );

export const rootEpic = combineEpics(fetchTodosEpic);
