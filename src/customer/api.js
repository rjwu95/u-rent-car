import axios from "axios";

export function getCustomer(id) {
  return axios.get(`/customers/${id}`);
}

export function getCustomers() {
  return axios.get(`/customers`);
}

export function updateCustomer(info) {
  return axios.patch("/customers", info);
}
