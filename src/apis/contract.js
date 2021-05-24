import axios from "axios";

export function getContracts() {
  return axios.get("/contracts");
}

export function getContract(id) {
  return axios.get(`/contracts/${id}`);
}

export function updateContract(info, id) {
  return axios.post(`/contracts/update`, { test: 1 });
}
