// controllers/moviecontroller//

import moviesClient from "../api/moviesClient.js";

// search for movie 
// @param {*} req
// @param {*} res
// @returns //


// function to search for movies//
const searchMovies = async (req, res) => {
  try {
    // get title from query parameter//
    const title = req.query.title;
    console.log("Query: ", title);
   

    // validation check---check if title was provided---below says---if title is not provided, return or  response status 400 error"
    if (!title) {
      return res.status(400)
      .json({ error: "Title query parameter is required" });
    }

    // make request to OMDB API--//
    const moviesResult = await moviesClient.get(`/?s=${title}`);
    res.json(moviesResult.data);

  } catch (error) {
    // handle any errors//
    console.error("movie search error", error);
    res.status(500).json({ error: "Internal server error--could not get movie by title"});
  }
  };

 
  const getMovieDetails = async (req, res) => {
    try {
      // get movie ID form URL parameter//
      const id = req.query.id;

      // validation check----check if id was provided//
      if(!id) {
        return res.status(400).json({ error: "ID query parameter is required" });
      }

      // make request to OMDb API using moviesClient//
      const response = await moviesClient.get(`/?i=${id}`);
      
      // send back the movie details//
      res.json(response.data);

    } catch (error) {
      console.error("movie details error:", error);
  //  handle any errors//
     res.status(500).json({ error: "Internal server error --movie details failed to return" });
    }
    };
  
    // export both functions to routes//
  export { searchMovies, getMovieDetails };