import React from "react";

const withLoadById = Component => {
  return class WithLoaById extends React.Component {
    componentDidMount() {
      const { id } = this.props.match && this.props.match.params;

      if (id) {
        this.props.load(id);
      }
    }
    render() {
      const { todo, loading } = this.props;
      return <Component {...this.props} todo={todo} loading={loading} />;
    }
  };
};

export default withLoadById;
