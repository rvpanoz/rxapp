import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import TodoList from "components/todos";

class Dashboard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <main className={classes.content}>
        <TodoList />
      </main>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
