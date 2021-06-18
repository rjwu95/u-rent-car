import axios from "axios";

export function login(info) {
  return axios.post("/auth/login", info);
}
export function getMe() {
  return axios.get("/auth/me");
}
