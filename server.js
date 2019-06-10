const express = requires("express");
const path = reuire("path");
const bodyParser = require("body-parser");

const app = express();

//define port for heroku deployment
var PORT = process.env.PORT || 8080;

//middleware? need it?  -- yes, thats the body-parser
 app.use(bodyParser.urlencoded({ extended: false}))
 app.use(bodyParser.json())


//this is giving the absolute path to the apiRoutes & htmlRoutes files
require(path.join(__dirname, './app/routing/apiRoutes.js'))(app);
require(path.join(__dirname, './app;routing/htmlRoutes.js'))(app);

// Start our server
server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });