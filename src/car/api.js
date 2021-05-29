import axios from "axios";

export function getCar(id) {
  return axios.get(`/cars/${id}`);
}

export function updateCar(info) {
  return axios.patch("/cars", info);
}