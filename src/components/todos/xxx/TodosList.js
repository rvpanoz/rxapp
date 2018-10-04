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

const TodosList = ({ classes, todos, loading, checked, toggle }) => (
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
        {loading && <Loader />}
        <List style={{ opacity: loading ? 0 : 1 }}>
          {todos &&
            todos.map((todo, idx) => (
              <TodosListItem
                handleToggle={toggle}
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

TodosList.propTypes = {
  classes: PropTypes.object,
  todos: PropTypes.array,
  loading: PropTypes.boolean,
  checked: PropTypes.array,
  toggle: PropTypes.func,
};

export default withStyles(listStyles)(TodosList);
