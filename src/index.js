import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "redux-react-hook";
import App from "components";
import configureStore from "store/configureStore";

const store = configureStore();

ReactDOM.render(
  <StoreProvider value={store}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
