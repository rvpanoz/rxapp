import { identity, assoc, propOr, prepend, merge } from "ramda";

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
  [addTodo.type]: (state, { payload: { todo } }) =>
    assoc("todos", prepend(todo, state.todos), state),
  [fetchTodosStart.type]: state =>
    merge(state, {
      loading: true,
      todos: state.todos
    }),
  [fetchTodosSuccess.type]: (state, { payload: { todos } }) =>
    merge(state, {
      loading: false,
      todos
    }),
  [fetchTodosError.type]: (state, { payload: { error } }) =>
    assoc("error", error, state),
  [todosFiltered.type]: (state, { payload: { todos } }) =>
    assoc("todos", todos, state)
};

const reducer = (state = initialState, action) =>
  propOr(identity, action.type, handlers)(state, action);

export default reducer;
