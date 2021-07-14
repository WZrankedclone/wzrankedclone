import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from './indexStore'
import "./index.css";
import App from "./MainPage";

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
