import { compose } from "redux";
import { connect } from "react-redux";

import mapProps from "commons/mapProps";

import {
  loading,
  todos,
  fetchTodos,
} from "models/todos/selectors";

import withFetchTodos from "./withFetchTodos";
import withTogglableItems from "./withTogglableItems";

import TodosList from "./TodosList";

export default compose(
  connect(
    mapProps({ todos, loading }),
    mapProps({ fetchTodos }),
  ),
  withFetchTodos,
  withTogglableItems,
)(TodosList);