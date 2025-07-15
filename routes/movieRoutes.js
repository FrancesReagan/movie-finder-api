// routes/movieRoutes//
import express from "express";
import { searchMovies, getMovieDetails } from "../controllers/movieController.js";


// create router//
const router = express.Router();


// route for searching movies//
// GET /api/movies/search?title=batman//
router.get("/search", searchMovies);

// route for getting movie details by ID//
// GET /api/movies/details?id=tt0372784
router.get("/details", getMovieDetails);


export default router;
