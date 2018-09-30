import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Header from "components/layout/header";
import Dashboard from "components/dashboard";
import Todo from "components/todos/Todo@";

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
      <div id="app" style={{ display: "flex" }}>
        <CssBaseline />
        <Router>
          <React.Fragment>
            <Header
              handleDrawerClose={this.handleDrawerClose}
              handleDrawerOpen={this.handleDrawerOpen}
              open={drawerOpen}
            />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/create" component={Todo} />
              <Route path="/todo/:id" component={Todo} />
              <Route component={NoMatch} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
