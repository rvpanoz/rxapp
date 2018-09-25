import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "components/layout/header";
import Dashboard from "components/dashboard";
import Grid from "@material-ui/core/Grid";

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
      <div style={{ display: "flex" }}>
        <CssBaseline />
        <Header
          handleDrawerClose={this.handleDrawerClose}
          handleDrawerOpen={this.handleDrawerOpen}
          open={drawerOpen}
        />
        <Grid container>
          <Grid item xs={9}>
            <Dashboard />
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </div>
    );
  }
}

export default App;
