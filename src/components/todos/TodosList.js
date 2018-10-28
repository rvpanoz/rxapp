import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import Loader from "@material-ui/core/CircularProgress";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import PaperHeader from "../layout/paper/PaperHeader";
import PaperBody from "../layout/paper/PaperBody";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TodosListItem from "./TodoListItem";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import { listStyles } from "./styles";
import { withStyles } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

const TodoListToolbar = props => {
  const { numSelected, handleSelectAll, addMessage } = props;

  return (
    <React.Fragment>
      <ListItem key={`todo-toolbar`} dense>
        <Checkbox
          tabIndex={-1}
          disableRipple
          onChange={e => handleSelectAll(e)}
        />
        <ListItemText
          primary={
            numSelected > 0 ? (
              <Typography color="primary" variant="caption">
                {numSelected} selected
              </Typography>
            ) : (
              <Typography variant="caption">None selected</Typography>
            )
          }
        />
        <ListItemSecondaryAction>
          <Toolbar>
            {numSelected > 0 ? (
              <Tooltip title="Complete selected">
                <IconButton aria-label="complete_selected">
                  <DoneIcon />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Incomplete all">
                <IconButton aria-label="incomplete_selected">
                  <ClearIcon />
                </IconButton>
              </Tooltip>
            )}
            <Button onClick={e => addMessage(e.target.tagName)}>
              Add message
            </Button>
          </Toolbar>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider light={true} />
    </React.Fragment>
  );
};

const TodosList = props => {
  const {
    checked,
    classes,
    todos,
    loading,
    addMessage,
    messages,
    handleToggle,
    handleSelectAll
  } = props;

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
            <TodoListToolbar
              numSelected={checked.length}
              classes={classes}
              addMessage={addMessage}
              handleSelectAll={handleSelectAll}
            />
            {todos &&
              todos.map((todo, idx) => {
                return (
                  todo && (
                    <TodosListItem
                      handleNavigation={id => props.history.push(`/todo/${id}`)}
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
};

TodosList.propTypes = {
  todo: PropTypes.array
};

export default withStyles(listStyles)(TodosList);
