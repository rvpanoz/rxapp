import { ADD_TODO } from "../actions/types";
import initialState from "../store/initialState";
import { identity, assoc, propOr, prop } from "ramda";

const handlers = {
  [ADD_TODO]: (state, action) => assoc("todo", action.todo, state)
};

const createReducer = (state, handlers) => (state = initialState, action) =>
  propOr(identity, prop("type", action), handlers)(state, action);

export default createReducer(initialState, handlers);
