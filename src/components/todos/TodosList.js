import React, { Component } from "react";
import PropTypes from "prop-types";

import { compose } from "redux";
import { connect } from "react-redux";

import TodosListItem from "./TodoListItem";

import withFetchTodos from "./withFetchTodos";

import { fetchTodosStart } from "../../actions";

export class TodosList extends Component {
  render() {
    const { todos } = this.props;

    return (
      <div className="tiles">
        {todos &&
          todos.map((todo, idx) => (
            <TodosListItem key={`todo-${idx}`} todo={todo} />
          ))}
      </div>
    );
  }
}

export default compose(
  connect(
    ({ loading, todos }) => ({ todos, loading }),
    dispatch => ({
      fetchTodos: () => dispatch(fetchTodosStart()),
    }),
  ),
  withFetchTodos,
)(TodosList);
