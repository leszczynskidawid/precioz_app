import axios from "axios";

const baseURL = process.env.REACT_API_URL || "https://randomuser.me/apdsadi"; 
const apiClient = axios.create({
    baseURL,
    timeout: 5000,
  });

export  { apiClient }
  