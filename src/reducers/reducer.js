import {
  addTodo,
  fetchTodosStart,
  fetchTodosError,
  fetchTodosSuccess,
  todosFiltered,
} from '../actions';

import initialState from "./initialState";
import { identity, assoc, propOr, prop, merge } from "ramda";

const handlers = {
  [addTodo.type]: (state, { payload: { todo }}) =>
    ({ ...state, todo }),
  [fetchTodosStart.type]: (state) =>
    ({ ...state, loading: true }),
  [fetchTodosSuccess.type]: (state, { payload: { todos }}) =>
    ({ ...state, loading: false, todos }),
  [fetchTodosError.type]: (state, { payload: { error }}) =>
    ({ ...state, error, loading: false, todos: [] }),
  [todosFiltered.type]: (state, { payload: { todos }}) =>
    ({ ...state, todos }),
};

const createReducer = (state, handlers) =>
  (state = initialState, action) =>
    propOr(identity, action.type, handlers)(state, action);

export default createReducer(initialState, handlers);
