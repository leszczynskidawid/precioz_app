import axios from "axios";

const baseURL =
  process.env.REACT_API_URL || "https://precizion-app-backend.herokuapp.com/v1";
const apiClient = axios.create({
  baseURL,
  timeout: 5000,
});

export { apiClient };
