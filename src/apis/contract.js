import axios from "axios";

export function getContracts() {
  return axios.get("/contracts");
}

export function getContract(id) {
  return axios.get(`/contracts/${id}`);
}

export function updateContract(info) {
  return axios.patch(`/contracts`, info);
}
