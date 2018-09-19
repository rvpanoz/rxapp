import React from "react";
import PropTypes from "prop-types";

import { compose } from "redux";
import { connect } from "react-redux";

import {
  loading,
  todos,
  fetchTodos,
} from "models/todos/selectors";

import TodosListItem from "./TodoListItem";

import withFetchTodos from "./withFetchTodos";

export const TodosList = ({ todos }) => (
  <div className="tiles">
    {todos &&
      todos.map((todo, idx) => (
        <TodosListItem key={`todo-${idx}`} todo={todo} />
      ))}
  </div>
);

export default TodosList;
