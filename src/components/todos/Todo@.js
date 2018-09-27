import { connect } from "react-redux";

import mapProps from "commons/mapProps";

import { onAddTodo } from "models/todos/selectors";

import Todo from "./Todo";

export default connect(
  null,
  mapProps({ onAddTodo })
)(Todo);
