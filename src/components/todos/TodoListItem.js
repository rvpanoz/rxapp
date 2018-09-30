import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import ListItem from "@material-ui/core/ListItem";
import CheckIcon from "@material-ui/icons/Check";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core";
import { listItemStyles } from "./styles";
import { format } from "date-fns";
import config from "config";

const TodoListItem = ({
  classes,
  todo: { title, id, completed, created_at },
  isChecked,
  handleToggle,
  handleNavigation
}) => (
  <ListItem
    className={classnames({
      [classes.done]: isChecked
    })}
    key={title}
    dense
    button
    onClick={e => handleNavigation(id)}
  >
    <ListItemText
      primary={title}
      secondary={format(created_at, config.dateFormat)}
    />
    <ListItemSecondaryAction>
      {completed === "1" && <CheckIcon />}
    </ListItemSecondaryAction>
  </ListItem>
);

TodoListItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(listItemStyles)(TodoListItem);
