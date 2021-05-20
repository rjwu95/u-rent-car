import axios from "axios";

export function getContracts() {
  return axios.get("/contracts");
}

export function getContract(id: string) {
  return axios.get(`/contracts/${id}`);
}
