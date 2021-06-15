import axios from "axios";
import { store, logout } from "../shared/store";

export function login(info) {
  return axios.post("/auth/login", info);
}
export function getMe() {
  const token = sessionStorage.getItem("token");
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
