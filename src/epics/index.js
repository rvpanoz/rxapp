import config from "../config";
import { combineEpics } from "redux-observable";
import { Observable, throwError, of } from "rxjs";
import { ajax } from "rxjs/observable/dom/ajax";

import { map, mapTo, switchMap, catchError } from "rxjs/operators";

import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mapTo";
import "rxjs/add/operator/switchMap";

import {
  FETCH_TODOS_ERROR,
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS
} from "../actions/types";

const fetchTodosEpic = (action$, state) =>
  action$.ofType(FETCH_TODOS_START).pipe(
    switchMap(() => {
      return ajax.getJSON(config.todosUrl);
    }),
    map(response => ({
      type: FETCH_TODOS_SUCCESS,
      todos: response.data
    })),
    catchError(error =>
      of({
        type: FETCH_TODOS_ERROR,
        error
      })
    )
  );

export const rootEpic = combineEpics(fetchTodosEpic);
