import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { store } from "./store/store";

let destination = document.querySelector(".root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  destination
);
