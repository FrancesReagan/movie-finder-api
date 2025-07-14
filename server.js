// main server file//
// import express framework//
import express from "express";
// import our movie routes//
import movieRoutes from "./routes/movieRoutes.js";
// load environment variables from .env file//
import dotenv from "dotenv";

dotenv.config();


// create express app//
const app = express();
// set port number//
const PORT = process.env.PORT || 3000;

// MIDDLEWARE//
// import middleware----not using this yet in this project---maybe if needed can use later if needed//
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
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
  });

