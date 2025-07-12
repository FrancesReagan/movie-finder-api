// api/moviesClient.js//
// the purpose of api/moviesClient.js is to create a reusable HTTP client that specifically makes requests to OMDB API//
// import from axios library --this is a toool that helps me make HTTP requests (asking another server for data)//
// axios is like a messenger that carries requests to other websites//
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const moviesClient = axios.create({
  baseURL: "http://www.omdbapi.com",
  params: {
    apikey: process.env.OMDB_API_KEY
  }
})

moviesClient.interceptors.request.use(config => {
  console.log(config);
  return config
}, error => {
  return Promise.reject(error);
})

export default moviesClient;
