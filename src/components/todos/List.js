import React, { Component } from "react";
import PropTypes from "prop-types";
import TodosListItem from "./ListItem";

class TodosList extends Component {
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

export default TodosList;
