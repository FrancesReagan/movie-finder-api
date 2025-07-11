// main server file//

// load environment variables from .env file//
require("dotenv").config;
// hidden in .env file//
const apiKey = process.env.OMDB_API_KEY;


// import express framework//
const express = require("express");
// import our movie routes//
const movieRoutes = require("./routes/movieRoutes");

// create express app//
const app = express();

// set port number//
const PORT = 3000;

