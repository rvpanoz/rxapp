import React from "react";

const withFetchTodos = Component =>
  class ListContainer extends React.Component {
    componentDidMount() {
      this.props.fetchTodos();
    }

    render() {
      const { todos, loading, history } = this.props;

      return <Component todos={todos} loading={loading} history={history} />;
    }
  };

export default withFetchTodos;
