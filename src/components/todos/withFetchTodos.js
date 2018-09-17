import React from "react";
import Loader from "../common/loader";

const withFetchTodos = Component =>
  class ListContainer extends React.Component {
    componentDidMount() {
      this.props.fetchTodos();
    }

    render() {
      const { todos } = this.props;

      return <Component todos={todos} />;
    }
  };

export default withFetchTodos;