// api/moviesClient.js//

import axios from "axios";
import dotenv from "dotenv";
// this line below tells dotenv to start working and read my .env file//
dotenv.config();

// here making a special version of axios called moviesClient//
const moviesClient = axios.create({
  // every request will start with this base url//
  baseURL: "https://www.omdbapi.com",
  params: {
    apikey: process.env.OMDB_API_KEY
  }
});

moviesClient.interceptors.request.use(config => {
  console.log("Request config:", config);
  return config;
}, error => {
  return Promise.reject(error);
});


export default moviesClient;