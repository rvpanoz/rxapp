import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Toolbar from "@material-ui/core/Toolbar";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core";
import { listItemStyles } from "./styles";
import { format } from "date-fns";
import Checkbox from "@material-ui/core/Checkbox";
import DoneIcon from "@material-ui/icons/Done";
import EditIcon from "@material-ui/icons/Edit";
import ScheduleIcon from "@material-ui/icons/Schedule";
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
  >
    <Checkbox tabIndex={-1} disableRipple onChange={e => handleToggle(id)} />
    <ListItemText
      primary={title}
      secondary={format(created_at, config.dateFormat)}
    />
    <ListItemSecondaryAction>
      <Toolbar>
        <Tooltip title="Edit todo">
          <IconButton onClick={e => handleNavigation(id)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </ListItemSecondaryAction>
  </ListItem>
);

TodoListItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(listItemStyles)(TodoListItem);
