const express = require("express");
const path = require("path");

const app = express();

//define port for heroku deployment
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//this is giving the absolute path to the apiRoutes & htmlRoutes files
require(path.join(__dirname, '/app/routing/apiRoutes.js'))(app);
require(path.join(__dirname, '/app/routing/htmlRoutes.js'))(app);

// Start our server
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });