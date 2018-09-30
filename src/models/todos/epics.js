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
    catchError(err => ({
      type: addTodoError.type,
      err
    }))
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
    catchError(err => ({
      type: updateTodoError.type,
      err
    }))
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
    catchError(err => ({
      type: fetchTodoError.type,
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

export default combineEpics(
  addTodoEpic,
  updateTodoEpic,
  fetchTodosEpic,
  fetchTodoEpic
);
