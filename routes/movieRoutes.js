// routes/movieRoutes//
// import express//
const express = require("express");

// import controller functions//
const { searchMovies, getMoviesDetails } = require("../controllers/movieControllers");

// create router//
const router = express.Router();

// route for searching movies//
router.get("/search", searchMovies);
// route for getting movie details by ID//
router.get("/movies/:id", getMoviesDetails);

// export router//
module.exports = router;