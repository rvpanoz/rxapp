import React, { Component } from "react";
import PropTypes from "prop-types";

import Loader from "@material-ui/core/CircularProgress";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import PaperHeader from "../layout/paper/PaperHeader";
import PaperBody from "../layout/paper/PaperBody";
import TodosListItem from "./TodoListItem";
import { listStyles } from "./styles";
import { withStyles } from "@material-ui/core";

const FILTERSMAPPING = {
  completed: "1",
  active: "0"
};

class TodosList extends Component {
  state = {
    activeFilter: ""
  };

  constructor(props) {
    super(props);
  }

  handleNavigation = todoId => this.props.history.push(`/todo/${todoId}`);

  render() {
    const { activeFilter } = this.state;
    const {
      checked,
      classes,
      todos,
      loading,
      filters,
      handleToggle,
      handleFilter
    } = this.props;

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
            {loading && <Loader size={25} />}
          </div>
          <Divider />
        </PaperHeader>
        <PaperBody>
          <div className={classes.list}>
            <List style={{ opacity: loading ? 0 : 1 }}>
              {todos &&
                todos.map((todo, idx) => {
                  return (
                    todo && (
                      <TodosListItem
                        handleNavigation={this.handleNavigation}
                        handleToggle={handleToggle}
                        key={`todo-${idx}`}
                        todo={todo}
                        isChecked={checked.indexOf(todo.id) > -1}
                      />
                    )
                  );
                })}
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
