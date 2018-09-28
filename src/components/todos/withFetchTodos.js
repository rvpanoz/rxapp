import React from "react";

const withFetchTodos = Component =>
  class ListContainer extends React.Component {
    componentDidMount() {
      this.props.fetchTodos();
    }

    render() {
      const { todos, loading } = this.props;

      return <Component todos={todos} loading={loading} />;
    }
  };

export default withFetchTodos;
