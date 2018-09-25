import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { loading, todos, fetchTodos } from "models/todos/selectors";
import TodosListItem from "./TodoListItem";
import withFetchTodos from "./withFetchTodos";
import List from "@material-ui/core/List";

class TodosList extends Component {
  state = {
    checked: []
  };

  handleToggle = todoId => () => {
    debugger;
    const { checked } = this.state;
    const currentIndex = checked.indexOf(todoId);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(todoId);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };

  render() {
    const { todos } = this.props;

    return (
      <div className="tiles">
        <List>
          {todos &&
            todos.map((todo, idx) => (
              <TodosListItem
                handleToggle={id => this.handleToggle(id)}
                key={`todo-${idx}`}
                todo={todo}
                isChecked={this.state.checked.indexOf(idx) > -1}
              />
            ))}
        </List>
      </div>
    );
  }
}

export default TodosList;
