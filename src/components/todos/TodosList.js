import React, { Component } from "react";
import PropTypes from "prop-types";
import TodosListItem from "./TodoListItem";
import List from "@material-ui/core/List";

class TodosList extends Component {
  state = {
    checked: []
  };

  handleToggle = todoId => {
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
    const { checked } = this.state;
    const { todos } = this.props;

    return (
      <div className="tiles">
        <List>
          {todos &&
            todos.map((todo, idx) => (
              <TodosListItem
                handleToggle={this.handleToggle}
                key={`todo-${idx}`}
                todo={todo}
                isChecked={checked.indexOf(todo.id) > -1}
              />
            ))}
        </List>
      </div>
    );
  }
}

TodosList.propTypes = {
  todo: PropTypes.array
};

export default TodosList;
