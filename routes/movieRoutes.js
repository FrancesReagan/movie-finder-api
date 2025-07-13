// routes/movieRoutes//
// import express//
import express from "express";
// import controller functions//
import { searchMovies, getMovieDetails } from "../controllers/movieController.js";


// create router//
const router = express.Router();


// route for searching movies//
// /api/movies/search
router.get("/search", searchMovies);
// route for getting movie details by ID//
// /api/
router.get("/details", getMovieDetails);
// router.get("/test", (req, res) => res.json({ message: "Test works!" }));

export default router;
