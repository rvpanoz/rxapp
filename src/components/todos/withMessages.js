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

    render() {
      const { messages } = this.state;

      return (
        <Component
          {...this.props}
          addMessage={this.addMessage}
          messages={messages}
        />
      );
    }
  };

export default withMessages;
