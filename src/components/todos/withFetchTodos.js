import React, { Component } from "react";

const withFetchTodos = BaseComponent =>
  class WithFetchTodos extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      this.props.fetchTodos();
    }

    render() {
      const { todos, loading, history } = this.props;

      return (
        <BaseComponent todos={todos} loading={loading} history={history} />
      );
    }
  };

export default withFetchTodos;
