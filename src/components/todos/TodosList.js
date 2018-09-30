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
import Filters from "./Filters";
import { listStyles } from "./styles";
import { withStyles } from "@material-ui/core";

const FILTERSMAPPING = {
  completed: "1",
  active: "0"
};

class TodosList extends Component {
  state = {
    activeFilter: "",
    checked: []
  };

  constructor(props) {
    super(props);
  }

  handleFilter = name => event => {
    this.setState({
      activeFilter: name
    });
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

  handleNavigation = todoId => this.props.history.push(`/todo/${todoId}`);

  filterTodos = filterName => {
    const { todos } = this.props;

    return todos.filter(todo => todo.completed === FILTERSMAPPING[filterName]);
  };

  render() {
    const { checked, activeFilter } = this.state;
    const { classes, todos, loading } = this.props;

    //clone todos
    let _todos = todos.slice(0);

    if (activeFilter && !!activeFilter.length && activeFilter !== "all") {
      _todos = this.filterTodos(activeFilter);
    }

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
          <div className={classes.filters}>
            <Filters
              filter={this.state.activeFilter}
              handleFilter={this.handleFilter}
            />
          </div>
          <div className={classes.list}>
            {loading && <Loader className={classes.loader} />}
            <List style={{ opacity: loading ? 0 : 1 }}>
              {_todos &&
                _todos.map((todo, idx) => {
                  return (
                    todo && (
                      <TodosListItem
                        handleNavigation={this.handleNavigation}
                        handleToggle={this.handleToggle}
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
