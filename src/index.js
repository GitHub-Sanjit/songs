import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "redux";

import App from "./components/App";
import reducers from "./reducers";

ReactDOM.render(
  <Provider store={configureStore(reducers)}>
    <App></App>
  </Provider>,
  document.querySelector("#root")
);
