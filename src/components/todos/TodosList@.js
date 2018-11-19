import { compose } from "redux";
import { connect } from "react-redux";
import mapProps from "commons/mapProps";
import { loading, todos, onFetchTodos } from "models/todos/selectors";

// import withFetchTodos from "./withFetchTodos";
import { useFetch } from "commons/hooks";

import withToggleableItems from "./withToggleableItems";
import TodosList from "./TodosList";

const TodoList = props => {};

export default compose(
  connect(
    mapProps({ todos, loading }),
    mapProps({ fetchTodos: onFetchTodos })
  ),
  withFetchTodos,
  withToggleableItems
)(TodosList);
