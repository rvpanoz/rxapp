import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core";
import { listItemStyles } from "./styles";

const TodoListItem = ({
  classes,
  todo: { title, id, created_at },
  isChecked,
  handleToggle
}) => (
  <ListItem
    className={classnames({
      [classes.done]: isChecked
    })}
    key={title}
    dense
    button
  >
    <ListItemText primary={title} secondary={created_at} />
    <ListItemSecondaryAction>
      <Checkbox onChange={e => handleToggle(id)} checked={isChecked} />
    </ListItemSecondaryAction>
  </ListItem>
);

TodoListItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(listItemStyles)(TodoListItem);
