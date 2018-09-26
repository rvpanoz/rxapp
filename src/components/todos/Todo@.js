import { connect } from "react-redux";

import mapProps from "commons/mapProps";

import { addTodo } from "models/todos/selectors";

import Todo from "./Todo";

export default connect(
  null,
  mapProps({ addTodo })
)(Todo);
