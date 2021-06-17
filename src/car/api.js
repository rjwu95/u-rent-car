import axios from "axios";

export function getCar(id) {
  return axios.get(`/cars/${id}`);
}

export function updateCar(info) {
  return axios.patch("/cars", info);
}

export function getCars() {
  return axios.get("/cars");
}

export function registerCar(info) {
  return axios.post("/cars", info);
}
