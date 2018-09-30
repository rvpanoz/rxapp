import { connect } from "react-redux";

import mapProps from "commons/mapProps";

import {
  loading,
  todo,
  onAddTodo,
  onUpdateTodo,
  onFetchTodo
} from "models/todos/selectors";

import Todo from "./Todo";

export default connect(
  mapProps({ loading, todo }),
  mapProps({ add: onAddTodo, update: onUpdateTodo, load: onFetchTodo })
)(Todo);
