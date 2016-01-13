var express = require("express");

var path = require("path");

var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "./client/static")));

var server = app.listen(8888, function() {
 console.log("listening on port 8888");
});

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);