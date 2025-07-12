// routes/movieRoutes//
// import express//
import express from "express";


// import controller functions//
import { searchMovies, getMovieDetails } from "../controllers/movieController.js";

// middleware if needed//
router.use(express.json());

// // create router//
// const router = express.Router();

// route for searching movies//
// /api/movies/search
router.get("/search", searchMovies);
// route for getting movie details by ID//
// /api/movies/:id
router.get("/movies/:id", getMovieDetails);

export default router;
