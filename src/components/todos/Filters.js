import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { filtersStyles } from "./styles";

const Filters = props => {
  const { classes, filter, handleFilter } = props;

  return (
    <Grid container>
      <Grid item xs={4}>
        <FormControlLabel
          className={classes.field}
          control={
            <Checkbox
              checked={filter === "all"}
              onChange={handleFilter("all")}
              className={classes.field}
              value="all"
              name="todo-all"
              aria-label="All"
              color="primary"
            />
          }
          label="All"
        />
      </Grid>
      <Grid item xs={4}>
        <FormControlLabel
          className={classes.field}
          control={
            <Checkbox
              checked={filter === "completed"}
              onChange={handleFilter("completed")}
              className={classes.field}
              value="completed"
              name="todo-completed"
              aria-label="Completed"
            />
          }
          label="Completed"
        />
      </Grid>
      <Grid item xs={4}>
        <FormControlLabel
          className={classes.field}
          control={
            <Checkbox
              checked={filter === "active"}
              onChange={handleFilter("active")}
              className={classes.field}
              value="active"
              name="todo-active"
              aria-label="Active"
            />
          }
          label="Active"
        />
      </Grid>
    </Grid>
  );
};

Filters.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(filtersStyles)(Filters);
