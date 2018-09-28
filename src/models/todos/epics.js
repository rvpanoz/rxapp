import { ofType } from "redux-observable";
import { combineEpics } from "redux-observable";
import { compose } from "ramda";
import { request } from "commons/utils";
import { map, mergeMap, catchError } from "rxjs/operators";

import config from "config";

import {
  addTodoStart,
  addTodoSuccess,
  addTodoError,
  fetchTodosStart,
  fetchTodosError,
  fetchTodosSuccess
} from "./actions";

const { api } = config;

const TODOS_URL = api.todos;
const TODO_URL = api.todo;

const addTodoEpic = action$ =>
  action$.pipe(
    ofType(addTodoStart.type),
    mergeMap(({ payload }) =>
      request({
        url: TODO_URL,
        method: "POST",
        body: payload
      })
    ),
    map(() => ({
      type: addTodoSuccess.type
    })),
    catchError(err => ({
      type: addTodoError.type,
      err
    }))
  );

const fetchTodosEpic = action$ =>
  action$.pipe(
    ofType(fetchTodosStart.type),
    mergeMap(action =>
      request({
        url: TODOS_URL,
        method: "GET"
      })
    ),
    map(ajaxResponse => {
      const { response } = ajaxResponse;

      return {
        type: fetchTodosSuccess.type,
        payload: {
          todos: response.data
        }
      };
    }),
    catchError(err => ({
      type: fetchTodosError.type,
      err
    }))
  );

export default combineEpics(addTodoEpic, fetchTodosEpic);
