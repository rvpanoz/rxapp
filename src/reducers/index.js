import {
  ADD_TODO,
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
  TODOS_FILTERED
} from "../actions/types";
import initialState from "../store/initialState";
import { identity, assoc, propOr, prop, merge } from "ramda";

const handlers = {
  [ADD_TODO]: (state, action) => assoc("todo", action.todo, state),
  [FETCH_TODOS_START]: (state, action) =>
    assoc("loading", action.loading, state),
  [FETCH_TODOS_SUCCESS]: (state, action) =>
    merge(state, {
      loading: action.loading,
      todos: action.todos
    }),
  [FETCH_TODOS_ERROR]: (state, action) =>
    merge(state, {
      loading: false,
      todos: [],
      error: action.error
    }),
  [TODOS_FILTERED]: (state, action) => assoc("todos", action.todos, state)
};

const createReducer = (state, handlers) => (state = initialState, action) =>
  propOr(identity, prop("type", action), handlers)(state, action);

export default createReducer(initialState, handlers);
