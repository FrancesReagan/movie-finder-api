// main server file//

// load environment variables from .env file//
import dotenv from "dotenv";
dotenv.config();
  // console.log(process.env.OMDB_API_KEY);
// hidden in .env file//
const apiKey = process.env.OMDB_API_KEY;
// import middleware//
import morgan from "morgan";


// import express framework//
import express from "express";
// import our movie routes//
import movieRoutes from "./routes/movieRoutes";

// create express app//
const app = express();

// set port number//
const PORT = 3000;

// use movie routes with /api prefix//
app.use("/api", movieRoutes);

// start server and listen on port 3000//
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
  });

