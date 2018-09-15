import { ADD_TODO, FETCH_TODOS_SUCCESS } from "../actions/types";
import initialState from "../store/initialState";
import { identity, assoc, propOr, prop } from "ramda";

const handlers = {
  [ADD_TODO]: (state, action) => assoc("todo", action.todo, state),
  [FETCH_TODOS_SUCCESS]: (state, action) => assoc("todos", action.todos, state)
};

const createReducer = (state, handlers) => (state = initialState, action) =>
  propOr(identity, prop("type", action), handlers)(state, action);

export default createReducer(initialState, handlers);
