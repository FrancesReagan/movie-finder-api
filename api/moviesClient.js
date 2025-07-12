// api/moviesClient.js//
// the purpose of api/moviesClient.js is to create a reusable HTTP client that specifically makes requests to OMDB API//
// import from axios library --this is a toool that helps me make HTTP requests (asking another server for data)//
// axios is like a messenger that carries requests to other websites//
import axios from "axios";
// import dotenv --as it helps to read the secret information that is in my .env file---thereby--keeping my API keys safe/hidden form public eyes//
import dotenv from "dotenv";
// this line below tells dotenv to start working and read my .env file//
dotenv.config();

// after that--I can now access my secret API key using process.env.OMBD_API_KEY//
// here making a special version of axios called moviesClient//
const moviesClient = axios.create({
  // every request will start with this base url//
  baseURL: "http://www.omdbapi.com",
  // every request will include automatically my API key---this saves  me time ---so I don't have to keep typing the same URL and API key over and over again//
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
