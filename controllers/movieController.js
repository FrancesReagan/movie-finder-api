// controllers/moviecontroller//
// import axios from making HTTP requests//
const axios = require("axios");

// function to search for movies//
const searchMovies = async (req, res) => {
  try {
    // get title from query parameter//
    const title = req.query.title;

    // check if title was provided//
    if (!title) {
      return res.status(400).json({ error: "Title query parameter is required" });
    }
    // make request to OMDb API//
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        search: title,
        // API key from .env file//
        apikey: process.env.OMDB_API_KEY 
      }
    });

    // send back the results//
    res.json(response.data);

  } catch (error) {
    // handle any errors//
    res.status(500).json({ error: "Something went wrong"});
  }
  };

  // function to get movie dtails by ID//
  const getMovieDetails = async (req, res) => {
    try {
      // get movie ID form URL parameter//
      const id = req.query.id;

      // make request to OMDb API//
      const response = await axios.get("http://www.omdbapi.com/",{
        params: {
          id: id,
          apikey: process.env.OMDB_API_KEY
        }
      });

      // send back the movie details//
      res.json(response.data);
    } catch (error) {
  //  handle any errors//
     res.status(500).json({ error: "Something went wrong" });
    }
    };
  
    // export both functions to routes//
    module.exports = { searchMovies, getMovieDetails };