import React, { lazy, Suspense, Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core";
import { NoMatch } from "components/layout/system";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ErrorBoundary from "commons/ErrorBoundary";
import Header from "components/layout/header";
import Dashboard from "components/dashboard";
import Todo from "components/todos/Todo@";

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
