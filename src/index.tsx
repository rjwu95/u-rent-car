import React from "react";
import ReactDOM from "react-dom";
import App from "./shared/router/AppRouter";
import "antd/dist/antd.css";
import { store } from "./shared/store";
import { Provider } from "react-redux";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
