import React, { Component } from "react";

const withFetchTodos = Component =>
  class WithFetchTodos extends Component {
    componentDidMount() {
      this.props.fetchTodos();
    }

    render() {
      const { todos, loading, history } = this.props;

      return <Component todos={todos} loading={loading} history={history} />;
    }
  };

export default withFetchTodos;
