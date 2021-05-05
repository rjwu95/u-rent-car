import axios from "axios";

export function getContracts() {
  return axios.get("/contracts");
}
