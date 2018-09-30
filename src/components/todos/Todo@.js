import { connect } from "react-redux";

import mapProps from "commons/mapProps";

import { loading, onAddTodo, onFetchTodo } from "models/todos/selectors";

import Todo from "./Todo";

export default connect(
  mapProps({ loading }),
  mapProps({ add: onAddTodo, load: onFetchTodo })
)(Todo);
