__Movie Finder API__
------------------------------------------------------------------------------------------------------------------------------------------

A RESTful API that allows users to search for movies and get detailed movie information using the OMDb(open movie database) API.
------------------------------------------------------------------------------------------------------------------------------------------------------------

_End point 1_ http://localhost:4000/api/movies/search?title=batman
<img width="1280" height="764" alt="image" src="https://github.com/user-attachments/assets/0290fde8-ca02-47ed-9dca-0eac9c88fccf" />



_End point 2_http://localhost:4000/api/movies/details?id=tt0372784
<img width="1280" height="764" alt="image" src="https://github.com/user-attachments/assets/19b9aa4d-8ccf-42fd-b6b0-472a77687b72" />



-----------------------------------------------------------------------------------------------------------------------------------------------------------------

__Required Dependencies__

-`npm install express axios dotenv`

  -exress: web server framework
  
  -axios: HTTp client for making API requests
  
  -dotenv: loads environment variables from .env file



__Development Dependencies__

-`npm install --save-dev nodemon`

  -nodemon: automatically restarts the server when files change



__What this Project Does__

This API acts as a middleman between users and the OMDb API. 

-Users can: 

   -search for movies by title
   
   -get detailed information about specific movies



__Technologies Used__

-Node.js: JavaScript runtime.

-Express.js: web framework for creating the server.

-Axios: for making HTTP requests to the external APIs.

-dotenv: for managing environment variables (keeping API keys safe and hidden from public view)

-Nodemon: development tool that automatically restarts the server when changes happen to the file or files change

-Morgan: HTTP request logger middleware (installed but may be used in future)

---------------------------------------------------------------------------------------------------------------------------------------------------


__Project Structure__
<img width="158" height="216" alt="image" src="https://github.com/user-attachments/assets/2a4e1891-cf20-4467-933c-b90974cde381" />


-----------------------------------------------------------------------------------------------------------------------------------------------------
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



 _External APIs Used__
 
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


_Create an .env file (environment file):__

 -create a `.env` file in the root directory (in same folder as server.js)
 
 -`PORT=4000`
 
  `OMDB_API_KEY=your_api_key_here`



  _Important:__
  -Replace `your_api_key_here` with your actual API key from OMDb
  
  -No spaces around the =sign
  
  -No quotes around the values
  
  -save as .env



_Create a `.gitignore` file in the root directory to keep sensitive information safe.__ 

-Inside the `.gitignore` file put `node_modules` and `.env` (for some reason my .env was stil pushed --- must have been the code I have now deleted that auto added the key--)

This prevents your API key and tjhe large node_modules folder from being uploaded to GitHub.



_Run the Server_

-For development (auto-restart on changes)

`npm run dev`

-For a normal start: `npm start`

The server will run on `http://localhost:4000`

-----------------------------------------------------------------------------------------------------------------------------------------------


__use Query Parameters__

 -What was used in this project -- query parameters--:
 
  - `Get /api/movies/search?title=batman`

  - `Get /api/movies/details?id=tt037284


    

 __Learning purpose:this approach helped me understand: how to extract data from `req.query.title` and `req.query.id`, input validation with query paramenters, 
 and URL structure with query strings.__

 _When to use each approach:_ 
 
  -Query parameters (what was used in this project): better for optional filters: `/api/movies?genre=action&year=2020`
  
  -Search functionality with multiple optional criteria.
  
  -When you need to pass multiple parameters easily


 -Search Movies:
 
  -URL: /api/movies/search
  
  -method: GET
  
  -query parameter: title (which is required)
  
  -full URL: http://localhost:4000/api/movies/search?title=moviename
  
   -example used: http://localhost:4000/api/movies/search?title=batman
   
  -response: JSON array of movies matching the search term



Get Movie Details:

 -URL: /api/movies/details
 
 -method: GET
 
 -query parameter: id (required)
 
 -full URL: http://localhost:4000/api/movies/details?id=movieid
 
 -example used: http://localhost:4000/api/movies/details?id=tt0372784
 
 -response: JSON object with detailed movie information

---------------------------------------------------------------------------------------------------------------------------------------------------------------

__Testing the API__

-using Postman: select extensions in Visual Studio code and search for `Postman` and select and install

-create a new request: click "new" "HTTP Request", set method to "GET", type in search endpoint: URL: http//localhost:4000/api/movies/search

-in "params" tab, add: -key: title , -value: batman

-click "Send"

repeat for details endpoint: URL: http://localhost:4000/api/movies/details

-in "Params" tab, add: -key: id, -value: tt0372784

-click "Send"


The API included proper error handling: -`400 Bad Request`: when required parameters are missing, `500 Internal Server Error`: when something goes wrong with the external API call

__What this project taught me__

-how to build a RESTful API with Express.js, -how to make HTTP requests to external APIs, -how to organize code into separate files (routes, controllers, client(s)), how to handle errors, that I am still learning how to keep API keys secure using enviornment variables (.env)--and the issues that this can have--; -how to validate user input before processing

I went ahead and added and used Morgan (`import morgan from "morgan"`,`app.use(morgan("combined")); --- and added Express.json() middleware---`app.use(express.json());`
-"morgan" helps you see all the GET requests form Postman in your terminal; -express.json()--helps POST/PUT endpoints that need to receive JSON data (like adding new movies to database).


___________________________________________________________________________________________________________________________________________________________________________________________________________________


__REFLECTIONS__

This project helped me to understand more how web APIs work and how different pieces of the backend application work and fit together. 

_What went well_: Setup and installing Dependencies: I learned how to properly initialize a Node.js project and install the needed dependencies. I installed `Morgan` middleware but did not end up
 using it for logging.  

 Understanding the Architecture: making separate files --making it modular---with `routes`, `controllers`, and `clients`--made the project organized and reusable and easier to maintain and debug.

 Debugging: I learned the importance of systematic debugging when I ran into issues (especially with the environment variables  not loading). I added console.log statements and trying to remember
            to test one piece at a time---is the best practice to figure out early what is going on if there is an issue. I did not do this consistently--but I will in the future.

  _Challenges faced:_
  Environment variables: this was my biggest challenge. My `.env` file was not being read properly---the API key was coming through as undefined. The issue--formatting and placement in the `.env` file
  are crucial. Then I had the API key actually push to github --even though it was in my .gitignore file---issue was I had it in duplicate in client and controller--so fixed these issues.
  I went ahead and got a new API-key--and slowly debugged movieController and moviesClient pages until it worked in Postman at both endpoints.

_Learning moments_: understanding modularity and how awesome it is---the why the movieClient functionality was separated form the controllers---as having one place to configure how I talk to the 
 OMDb API means that if I need to change something (like the API key or add logging) -- I only have to change it in one place.

 _Skills Developed_: 
 -Backend development: understanding how servers work and respond to requests.
 -API design: learning about RESTful principles and good endpoint design.
 -Error handling: making applications robust and user-friendly.
 -code organization: separating concerns and making code more maintainable.
 -environment management: keeping secrets safe and making configurations flexible.
 -debugging: systematic problem-solving and using logs effectively are best practices.

 _In the future_:
  -learn about database integration (connecting to MongoDB or similar).
  -learn about user authentication and authorization.
  -learn how to build front-end apps that consume APIs.
  -how to deploy APIs to the cloud.
 

_Resources and References_:
[Express.js](https://expressjs.com/)

[Axios](https://axios-http.com/)

[Node.js dotenv](https://www.npmjs.com/package/dotenv)

[Nodemon](https://nodemon.io/)

[Postman](https://www.postman.com/)

[RESTful API Design](https://restfulapi.net/)

[HTTP Status codes]( https://httpstatuses.com/)

[JSON format](https://www.json.org/)

__Acknowledgments__
To my instructors at Per Scholas: A. Tavarez and C. Wright thank you for your support and guidance; to my fellow 2025-RTT-23 cohort classmates---thank you for your support.
  


