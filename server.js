// define the dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Configure the Express server
var app = express();
var PORT = process.env.PORT || 3000;

// Set up Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Middleware used by Express to serve static content
app.use(express.static('app'));

//Points to routing files
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


//Start server and notify user of their port
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
