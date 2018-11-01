import React from "react";

const withMessages = Component =>
  class WithMessages extends React.Component {
    state = {
      messages: []
    };

    addMessage = message => {
      const { messages } = this.state;

      this.setState({
        messages: [...messages, message]
      });
    };

    clearMessages = () => {
      this.setState({
        messages: []
      });
    };

    render() {
      const { messages } = this.state;

      return (
        <Component
          {...this.props}
          addMessage={this.addMessage}
          clearMessages={this.clearMessages}
          messages={messages}
        />
      );
    }
  };

export default withMessages;
