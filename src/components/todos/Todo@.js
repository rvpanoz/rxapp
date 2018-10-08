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
import withHandlers from "./withHandlers";
import Todo from "./Todo";

export default compose(
  connect(
    mapProps({ loading, todo }),
    mapProps({ add: onAddTodo, update: onUpdateTodo, load: onFetchTodo })
  ),
  withHandlers({
    log: () => console.log(...args)
  }),
  withLoading
)(Todo);
