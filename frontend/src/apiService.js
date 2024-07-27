import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // Replace with your actual backend URL
});

export const getPaginatedProducts = (category) => {
  return api.get(`/products/get/${category}`);
};
