import axios from "axios";
import { store } from "../store";
import { logout } from "../store";

export function login(info) {
  return axios.post("/auth/login", info);
}
export function getMe() {
  const token = localStorage.getItem("token");
  if (!token) {
    store.dispatch(logout());
    return Promise.reject("토큰 없음");
  }
  return axios.get("/auth/me", {
    headers: {
      token,
    },
  });
}