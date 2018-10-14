import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./components/App";
import reducers from "./reducers/";
import reduxPromise from "redux-promise";

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(reduxPromise))}>
    <App />
  </Provider>,

  document.getElementById("root")
);
