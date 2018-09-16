import {
  ADD_TODO,
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS
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
    })
};

const createReducer = (state, handlers) => (state = initialState, action) =>
  propOr(identity, prop("type", action), handlers)(state, action);

export default createReducer(initialState, handlers);
