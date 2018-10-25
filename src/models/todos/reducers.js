import { identity, assoc, propOr, prepend, merge } from "ramda";

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

const initialState = {
  loading: false,
  error: null,
  todos: [],
  todo: null
};

const handlers = {
  [addTodoStart.type]: (state, { payload: { todo } }) =>
    merge(state, {
      loading: true,
      todos: assoc("todos", prepend(todo, state.todos), state)
    }),
  [addTodoSuccess.type]: state => assoc("loading", false, state),
  [updateTodoStart.type]: state => assoc("loading", true, state),
  [fetchTodoStart.type]: state => assoc("loading", true, state),
  [fetchTodoSuccess.type]: (state, { payload: { todo } }) =>
    merge(state, {
      loading: false,
      todo
    }),
  [fetchTodosStart.type]: state =>
    merge(state, {
      loading: true,
      todos: state.todos
    }),
  [fetchTodosSuccess.type]: (state, { payload: { todos } }) => {
    return merge(state, {
      loading: false,
      todos
    });
  },

  [fetchTodosError.type]: (state, { payload: { error } }) =>
    assoc("error", error, state),
  [fetchTodoError.type]: (state, { payload: { error } }) =>
    assoc("error", error, state),
  [addTodoError.type]: (state, { payload: { error } }) =>
    assoc("error", error, state)
};

const reducer = (state = initialState, action) =>
  propOr(identity, action.type, handlers)(state, action);

export default reducer;
