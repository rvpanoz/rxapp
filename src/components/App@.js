import React from "react";
import { connect } from "react-redux";
import mapProps from "commons/mapProps";
import { loading } from "models/todos/selectors";
import App from "./App";

export default connect(mapProps({ loading }))(App);
