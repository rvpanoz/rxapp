import React, { Component } from "react";

import Header from "components/layout/header";
import Dashboard from "components/dashboard";

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
      <div>
        <div className="container grid-lg">
          <Header
            handleDrawerClose={this.handleDrawerClose}
            handleDrawerOpen={this.handleDrawerOpen}
            open={drawerOpen}
          />
          <div className="columns" style={{ paddingTop: "15px" }}>
            <div className="column col-xs-9">{<Dashboard />}</div>
            <div className="column col-xs-3" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
