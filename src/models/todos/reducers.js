import { identity, assoc, propOr, prop, merge } from "ramda";

import {
  addTodo,
  fetchTodosStart,
  fetchTodosError,
  fetchTodosSuccess,
  todosFiltered,
} from './actions';

const initialState = {
  loading: false,
  error: null,
  todos: [],
  filters: []
};

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

const createReducer = (state, handlers) => {
  const reducer = (state = initialState, action) =>
    propOr(identity, action.type, handlers)(state, action);
  reducer.initialState = initialState;

  Object.freeze(reducer);
  return reducer;
};

export default createReducer(initialState, handlers);
