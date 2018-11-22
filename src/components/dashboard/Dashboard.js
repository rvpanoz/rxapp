import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import TodoList from "components/todos/TodoListHooks";

class Dashboard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <main className={classes.content}>
        <Grid container>
          <Grid item xs={6} sm={6} lg={4} xl={4}>
            <TodoList {...this.props} />
          </Grid>
        </Grid>
      </main>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
