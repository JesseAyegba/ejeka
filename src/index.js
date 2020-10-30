import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { rootReducer } from "./reducers/index";

import { createStore } from "redux";
import { Provider } from "react-redux";

let destination = document.querySelector(".root");
let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  destination
);
