// main server file//
// import express framework//
import express from "express";
// import our movie routes//
import movieRoutes from "./routes/movieRoutes.js";
// load environment variables from .env file//
import dotenv from "dotenv";

dotenv.config();
  // console.log(process.env.OMDB_API_KEY);
// hidden in .env file//
// const apiKey = process.env.OMDB_API_KEY;

// create express app//
const app = express();
// set port number//
const PORT = process.env.PORT || 4000;

// MIDDLEWARE//
// import middleware//
import morgan from "morgan";


// ROUTES//
// use movie routes with /api prefix//
app.use("/api/movies", movieRoutes);

app.get("/", (req, res) => {
  res.send("hello.....");
}); 


// start server and listen on port //
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  });

