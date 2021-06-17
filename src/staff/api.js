import axios from "axios";

export function getStaffs() {
  return axios.get("/staffs");
}

export function registerStaff(info) {
  return axios.post("/staffs", info);
}
