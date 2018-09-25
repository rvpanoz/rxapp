import React, { Component } from "react";
import PropTypes from "prop-types";
import TodosListItem from "./TodoListItem";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import PaperHeader from "../layout/paper/PaperHeader";
import PaperBody from "../layout/paper/PaperBody";

import { listStyles } from "./styles";
import { withStyles } from "@material-ui/core";

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
    const { classes, todos } = this.props;

    return (
      <Paper elevation={2} square className={classes.container}>
        <PaperHeader>
          <div className={classes.flexContainer}>
            <Typography
              className={classes.heading}
              align="left"
              gutterBottom={true}
              variant="headline"
            >
              My todos
            </Typography>
          </div>
          <Divider />
        </PaperHeader>
        <PaperBody>
          <div className={classes.list}>
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
        </PaperBody>
      </Paper>
    );
  }
}

TodosList.propTypes = {
  todo: PropTypes.array
};

export default withStyles(listStyles)(TodosList);
