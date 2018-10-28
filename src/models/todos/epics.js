import { ofType } from "redux-observable";
import { combineEpics } from "redux-observable";
import { request, callServer } from "commons/utils";
import { map, mergeMap, switchMap, catchError } from "rxjs/operators";
import { compose } from "recompose";
import { of } from "rxjs";
import config from "config";

import {
  addTodoStart,
  addTodoSuccess,
  addTodoError,
  updateTodoStart,
  updateTodoSuccess,
  updateTodoError,
  fetchTodoStart,
  fetchTodoSuccess,
  fetchTodoError,
  fetchTodosStart,
  fetchTodosError,
  fetchTodosSuccess
} from "./actions";

const { api } = config;

const TODOS_URL = api.todos;
const TODO_URL = api.todo;
const TODO_CREATE_URL = api.create;
const TODO_UPDATE_URL = api.update;

const addTodoEpic = action$ =>
  action$.pipe(
    ofType(addTodoStart.type),
    mergeMap(({ payload }) =>
      request({
        url: TODO_CREATE_URL,
        method: "POST",
        body: payload
      })
    ),
    map(() => ({
      type: addTodoSuccess.type
    })),
    catchError(err =>
      of({
        type: addTodoError.type,
        err
      })
    )
  );

const updateTodoEpic = action$ =>
  action$.pipe(
    ofType(updateTodoStart.type),
    mergeMap(({ payload }) =>
      request({
        url: TODO_UPDATE_URL,
        method: "POST",
        body: payload
      })
    ),
    map(() => ({
      type: updateTodoSuccess.type
    })),
    catchError(err =>
      of({
        type: updateTodoError.type,
        err
      })
    )
  );

const fetchTodoEpic = action$ =>
  action$.pipe(
    ofType(fetchTodoStart.type),
    mergeMap(({ payload }) =>
      request({
        url: `${TODO_URL}/${payload}`,
        method: "GET"
      })
    ),
    map(ajaxResponse => {
      const { response } = ajaxResponse;

      return {
        type: fetchTodoSuccess.type,
        payload: {
          todo: response.data && response.data[0]
        }
      };
    }),
    catchError(err =>
      of({
        type: fetchTodoError.type,
        err
      })
    )
  );

const fetchTodosEpic = action$ =>
  action$.pipe(
    ofType(fetchTodosStart.type),
    switchMap(action =>
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
          todos: (response && response.data) || []
        }
      };
    }),
    catchError(error =>
      of({
        type: fetchTodosError.type,
        error
      })
    )
  );

export default combineEpics(
  addTodoEpic,
  updateTodoEpic,
  fetchTodosEpic,
  fetchTodoEpic
);
