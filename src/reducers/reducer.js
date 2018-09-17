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
  [fetchTodosStart.type]: (state, { payload: { loading } }) =>
    ({ ...state, loading }),
  [fetchTodosSuccess.type]: (state, { payload: { loading, todos }}) =>
    ({ ...state, loading, todos }),
  [fetchTodosError.type]: (state, { payload: { error }}) =>
    ({ ...state, error,  todos: [], loading: false }),
  [todosFiltered.type]: (state, { payload: { todos }}) =>
    ({ ...state, todos }),
};

const createReducer = (state, handlers) =>
  (state = initialState, action) =>
    propOr(identity, action.type, handlers)(state, action);

export default createReducer(initialState, handlers);
