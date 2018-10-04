import React, { Component } from "react";
import PropTypes from "prop-types";

const withTogglableItems = Component =>
  class TogglableItems extends Component {
    state = {
      checked: []
    };

    toggle = todoId => {
      const { checked } = this.state;
      const currentIndex = checked.indexOf(todoId);
      const placementIndex =
        currentIndex > 0 ? currentIndex : checked.length + 1;
      this.setState({
        checked: [
          ...checked.slice(0, placementIndex - 1),
          todoId,
          ...checked.slice(placementIndex)],
      });
    };

    render() {
      return <Component {...this.props} checked={this.state.checked} toggle={this.toggle}/>;
    }
  };

export default withTogglableItems;
