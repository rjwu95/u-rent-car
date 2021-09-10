import React from "react";
import ReactDOM from "react-dom";
import App from "./shared/routers/AppRouter";
import "antd/dist/antd.css";
import { store, logout } from "./shared/store";
import { Provider } from "react-redux";
import axios from "axios";

axios.defaults.baseURL =
  // "http://localhost:3001/api";
  "http://ec2-3-36-60-243.ap-northeast-2.compute.amazonaws.com:8080/api";
axios.interceptors.request.use((req) => {
  req.headers.token = sessionStorage.getItem("token");
  return req;
});
axios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      alert("세션이 만료되었습니다.");
      sessionStorage.removeItem("token");
      store.dispatch(logout());
      throw new Error();
    }
    throw err;
  }
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
