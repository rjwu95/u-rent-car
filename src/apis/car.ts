import axios from "axios";

export function getCar(id: string) {
  return axios.get(`/cars/${id}`);
}
