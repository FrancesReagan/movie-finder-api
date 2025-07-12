import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const moviesClient = axios.create({
  baseURL: "http://www.omdbapi.com",
  params: {
    apiKey: process.env.API_KEY,
  }
})

moviesClient.interceptors.request.use(config => {
  console.log(config);
  return config
}, error => {
  return Promise.reject(error);
})

export default moviesClient;
