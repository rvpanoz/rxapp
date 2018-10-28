import { useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import mapProps from "commons/mapProps";
import { loading, todos, onFetchTodos } from "models/todos/selectors";

import withFetchTodos from "./withFetchTodos";
import withToggleableItems from "./withToggleableItems";
import withMessages from "commons/hocs/withMessages";
import TodosList from "./TodosList";

export default compose(
  connect(
    mapProps({ todos, loading }),
    mapProps({ fetchTodos: onFetchTodos })
  ),
  withMessages,
  withFetchTodos,
  withToggleableItems
)(TodosList);
