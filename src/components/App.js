import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Header from "components/layout/header";
import Dashboard from "components/dashboard";
import Todo from "components/todos/Todo";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

const NoMatch = props => {
  return (
    <Grid container style={{ paddingTop: "40px" }}>
      <Grid item xs={9} sm={9} lg={6} xl={6}>
        No match :(
      </Grid>
    </Grid>
  );
};

class App extends Component {
  state = {
    drawerOpen: true
  };

  handleDrawerOpen = () => {
    this.setState({ drawerOpen: true });
  };

  handleDrawerClose = () => {
    this.setState({ drawerOpen: false });
  };

  render() {
    const { drawerOpen } = this.state;

    return (
      <Router>
        <div style={{ display: "flex" }}>
          <CssBaseline />
          <Header
            handleDrawerClose={this.handleDrawerClose}
            handleDrawerOpen={this.handleDrawerOpen}
            open={drawerOpen}
          />
          <Grid container style={{ paddingTop: "40px" }}>
            <Grid item xs={12} sm={12} lg={12} xl={12}>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/create" component={Todo} />
                <Route component={NoMatch} />
              </Switch>
            </Grid>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
