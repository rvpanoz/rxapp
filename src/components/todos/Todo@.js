import { connect } from "react-redux";
import { compose } from "redux";
import mapProps from "commons/mapProps";

import {
  loading,
  todo,
  onAddTodo,
  onUpdateTodo,
  onFetchTodo
} from "models/todos/selectors";

import withLoading from "./withLoading";
import withLoadById from "./withLoadById";
import withMessages from "./withMessages";
import Todo from "./Todo";

export default compose(
  connect(
    mapProps({ loading, todo }),
    mapProps({ add: onAddTodo, update: onUpdateTodo, load: onFetchTodo })
  ),
  withMessages,
  withLoadById,
  withLoading
)(Todo);
