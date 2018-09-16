import React from "react";
import Header from "./components/common/header";
import { TodosListContainer } from "./containers";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    loading: state.loading
  };
};

const App = props => {
  return (
    <div>
      <div className="container grid-lg">
        <Header loading={props.loading} />
        <div className="columns" style={{ paddingTop: "15px" }}>
          <div className="column col-xs-9">{<TodosListContainer />}</div>
          <div className="column col-xs-3" />
        </div>
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  null
)(App);
