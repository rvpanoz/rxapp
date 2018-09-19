import { identity, assoc, propOr, prop, merge } from "ramda";

import {
  addTodo,
  fetchTodosStart,
  fetchTodosError,
  fetchTodosSuccess,
  todosFiltered
} from "./actions";

const initialState = {
  loading: false,
  error: null,
  todos: [],
  filters: []
};

const handlers = {
  [addTodo.type]: (state, { payload: { todo } }) => ({
    ...state,
    todos: [...state.todos, todo]
  }),
  [fetchTodosStart.type]: state => ({
    ...state,
    loading: true,
    todos: [...state.todos]
  }),
  [fetchTodosSuccess.type]: (state, { payload: { todos } }) => ({
    ...state,
    loading: false,
    todos: [...state.todos, ...todos]
  }),
  [fetchTodosError.type]: (state, { payload: { error } }) => ({
    ...state,
    error
  }),
  [todosFiltered.type]: (state, { payload: { todos } }) => ({
    ...state,
    todos: [...state.todos, ...todos]
  })
};

const reducer = (state = initialState, action) =>
  propOr(identity, action.type, handlers)(state, action);

export default reducer;
