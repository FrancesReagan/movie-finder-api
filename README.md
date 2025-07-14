__Movie Finder API__
A RESTful API that allows users to search for movies and get detailed movie information using the OMDb(open movie database) API.

_End point 1_ http://localhost:4000/api/movies/search?title=batman
<img width="1261" height="734" alt="Movie-finder-api endpoint1" src="https://github.com/user-attachments/assets/a0cf45f7-acb6-471b-b2c9-371384ffe3f7" />


_End point 2_http://localhost:4000/api/movies/details?id=tt0372784
<img width="1259" height="695" alt="Movie-finder-api endpoint2" src="https://github.com/user-attachments/assets/c468a1ec-dbca-4702-bb4c-73e9555b92d0" />


_Required Dependencies_
-`npm install express axios dotenv`
  -exress: web server framework
  -axios: HTTp client for making API requests
  -dotenv: loads environment variables from .env file

_Development Dependencies_
-`npm install --save-dev nodemon`
  -nodemon: automatically restarts the server when files change

__What this Project Does__
This API acts as a middleman between users and the OMDb API. 
-Users can: 
   -search for movies by title
   -get detailed information about specific movies

_Technologies Used_
-Node.js: JavaScript runtime.
-Express.js: web framework for creating the server.
-Axios: for making HTTP requests to the external APIs.
-dotenv: for managing environment variables (keeping API keys safe and hidden from public view)
-Nodemon: development tool that automatically restarts the server when changes happen to the file or files change
-Morgan: HTTP request logger middleware (installed but not implemented in this project version)

__Project Structure__
<img width="158" height="216" alt="image" src="https://github.com/user-attachments/assets/2a4e1891-cf20-4467-933c-b90974cde381" />

__Setup Instructions__
  -`mkdir movie-finder-api`
  -`cd movie-finder-api`
  -Initialize project: `npm init -y`
  -Install required dependencies: `npm install express axios dotenv`
  -Update package.json: add these lines to package.json
    -"type": "module",
    -"scripts":{
       "start": "node server.js",
       "dev": "nodemon server.js
    (note: the "type": "module" is crucial--as it allows you to use modern import/export syntax instead of older `require()` syntax.
    Package.json should look like this (albeit--don't need morgan for this project):
    <img width="379" height="377" alt="image" src="https://github.com/user-attachments/assets/016c5267-9531-4254-9d4c-9362131ee63a" />
    -`touch server.js` --creates your empty server.js file


 _External APIs Used_
 OMDb API (open movie database)
   -website: http://www.omdbapi.com/
   -API Key registration: http://www.omdbapi.com/apikey.apx
   -documentation: http://omdbapi.com/  
   -What it provides: movie data including titles, plots, ratings, and cast.
   -Free 1,000 daily requests alloted.

  Get an API key:
   -get to OMDb API site
   -sign up for a free account
   -get API key via email they send

_Create an .env file (environment file):
 -create a `.env` file in the root directory (in same folder as server.js)


