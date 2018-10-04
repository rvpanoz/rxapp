import React from "react";
import PropTypes from "prop-types";

const withUpdatableItem = Component =>
  class UpdatableItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {...this.props.initialState};
    }

    addTodo = e => {
    };

    handleChange = name => event => {
      this.setState({
        [name]: event.target.value
      });
    };

    render() {
      return (
        <Component {...this.props} addTodo={this.addTodo} handleChange={this.handleChange}/>
      );
    }
  };

export default withUpdatableItem;
