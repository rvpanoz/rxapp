import { connect } from "react-redux";

import mapProps from "commons/mapProps";

import { loading, onAddTodo } from "models/todos/selectors";

import Todo from "./Todo";

export default connect(
  mapProps({ loading }),
  mapProps({ add: onAddTodo })
)(Todo);
