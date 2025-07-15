
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

// // MIDDLEWARE//
// // import middleware for logging//
// import morgan from "morgan";
// app.use(morgan("combined"));
// // add JSON parsing middleware//
// app.use(express.json());


// ROUTES//
// use movie routes with /api prefix//
app.use("/api/movies", movieRoutes);

// home route//
app.get("/", (req, res) => {
  res.json({
      message: "movie finder API is running",
      endpoints: {
        search: "/api/movies/search?title=batman",
        details: "/api/movies/details?id=tt0372784",
      }
    })
  });



// start server and listen on port //
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
  });

