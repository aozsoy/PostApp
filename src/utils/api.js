import axios from "axios";

export function api() {
  return axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });
}
