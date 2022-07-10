import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./bootstrap.min.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.render(
  // use Provider to add redux to our app
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
