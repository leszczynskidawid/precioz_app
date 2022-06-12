import axios from "axios";

const baseURL = process.env.REACT_API_URL || "https://randomuser.me/"; 
const apiClient = axios.create({
    baseURL,
    timeout: 5000,
  });

export  { apiClient }
  