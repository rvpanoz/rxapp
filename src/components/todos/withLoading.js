import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const withLoading = Component =>
  class WithLoading extends React.Component {
    render() {
      const { loading } = this.props;
      return loading ? <CircularProgress /> : <Component {...this.props} />;
    }
  };

export default withLoading;
