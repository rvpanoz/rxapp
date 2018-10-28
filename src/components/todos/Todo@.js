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

import withLoading from "commons/hocs/withLoading";
import withMessages from "commons/hocs/withMessages";
import Todo from "./Todo";

export default compose(
  connect(
    mapProps({ loading, todo }),
    mapProps({ add: onAddTodo, update: onUpdateTodo, load: onFetchTodo })
  ),
  withMessages,
  withLoading
)(Todo);
