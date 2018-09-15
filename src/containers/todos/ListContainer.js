import React, { Component } from "react";
import { connect } from "react-redux";
import TodosList from "../../components/todos/List";
import { fetchTodos } from "../../actions";

function mapStateToProps(state) {
  return {
    loading: state.loading,
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTodos: () => dispatch(fetchTodos())
  };
}

class ListContainer extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    const { todos } = this.props;
    return <TodosList todos={todos} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);
