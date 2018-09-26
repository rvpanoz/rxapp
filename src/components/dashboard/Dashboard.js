import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import TodoList from "components/todos";
import Filters from "components/filters";

class Dashboard extends Component {
  render() {
    const { classes, loading } = this.props;

    return (
      <main className={classes.content}>
        <Grid container style={{ paddingTop: "40px" }}>
          <Grid item xs={9} sm={9} lg={6} xl={6}>
            <TodoList {...this.props} />
          </Grid>
          <Grid item xs={3} sm={3} lg={3} xl={3}>
            <Filters />
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
