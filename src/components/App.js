import React, { lazy, Suspense, Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ErrorBoundary from "commons/ErrorBoundary";

import Header from "components/layout/header";
import Dashboard from "components/dashboard";
import Todo from "components/todos/Todo@";

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

  constructor(props) {
    super(props);
    this.appRef = React.createRef();
  }
  handleDrawerOpen = () => {
    this.setState({ drawerOpen: true });
  };

  handleDrawerClose = () => {
    this.setState({ drawerOpen: false });
  };

  render() {
    const { classes } = this.props;
    const { drawerOpen } = this.state;

    return (
      <div ref={this.appRef} className={classes.app}>
        <CssBaseline />
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
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
          </Suspense>
        </ErrorBoundary>
      </div>
    );
  }
}

const styles = theme => ({
  app: {
    display: "flex"
  }
});

export default withStyles(styles)(App);
