import React from "react";
import ReactDOM from "react-dom";
import App from "./shared/routers/AppRouter";
import "antd/dist/antd.css";
import { store } from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import { logout } from "./store";

axios.defaults.baseURL = "http://localhost:3001/api";
axios.interceptors.request.use((req) => {
  req.headers.Authorization = sessionStorage.getItem("token");
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
  }
);
var a = store.getState();
console.log(a);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
