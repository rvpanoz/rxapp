import React, { Component } from "react";
import PropTypes from "prop-types";

import { compose } from "redux";
import { connect } from "react-redux";

import { fetchTodosStart } from "models/todos/actions";

import {
  loading,
  todos,
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

export default compose(
  connect(
    state => ({ ...todos(state), ...loading(state) }),
    dispatch => ({
      fetchTodos: () => dispatch(fetchTodosStart()),
    }),
  ),
  withFetchTodos,
)(TodosList);
