import React from "react";

const withMessages = Component => {
  return class WithMessages extends React.Component {
    state = {
      open: false,
      message: null
    };
    toggleNotifier = (open, message) => {
      this.setState({
        open,
        message
      });
    };
    render() {
      const { open, message } = this.state;

      return (
        <Component
          {...this.props}
          open={open}
          message={message}
          toggleNotifier={this.toggleNotifier}
        />
      );
    }
  };
};

export default withMessages;
