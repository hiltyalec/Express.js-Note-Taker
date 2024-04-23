//IMPORTS NECESSARY MODULES AND SETS UP VARIABLES FOR THE APPLICATION
const express = require('express');
const html_routes = require('./routes/htmlRoutes')
const api_routes = require('./routes/apiRoutes')
const PORT = process.env.PORT || 3001;

//CREATES A NEW APP USING EXPRESS
const app = express();

//CONFIGURES THE MIDDLEWARE FOR EXPRESS APPLICATION.
    //is used to parse URL-encoded data from incoming requests, enabling handling of form data sent via POST requests.
app.use(express.urlencoded({ extended: false }));
    //is used to parse JSON data from incoming requests, allowing the application to handle JSON payloads in the request body.
app.use(express.json());
     //sets up static file serving middleware, specifying the "public" directory as the location from which to serve static assets like HTML, CSS, JavaScript, and images.
app.use(express.static("public"));
    //route handlers that are attached to the Express application, allowing it to handle requests based on defined routes.
app.use(html_routes)
app.use(api_routes)
    //CODE TO START THE SERVER AND LISTENS FOR INCOMING CONNECTIONS ON THE SPECIFIED PORT. ONCE THE SERVER IS RUNNING, IT PRINTS A MESSAGE TO THE CONSOLE.
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
