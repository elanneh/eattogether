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

var io = require("socket.io").listen(server);

// var users = [];
// var items = [];

// io.sockets.on("connection", function(socket){
// 	console.log("socketssssss");
// 	console.log("socket id: " + socket.id);

//  	//user joining
// 	socket.on("user_joining", function(){

// 		socket.emit("display_items");

// 	});

// 	// io.emit("user_joined", {first_name: data.first_name});

// 	//adding bucket

	// socket.on("adding_bucket", function(data){
	// 	socket.emit("bucket_added", {name: data.bucket_name});
	// });

// 	//receiving item
// 	socket.on("adding_item", function(data){
// 		// console.log(data);
// 		items.push({new_item: data.new_item});
// 		console.log(items);

// 		io.emit("item_added", items[items.length-1]);
// 	});

// 	socket.on("disconnect", function(){
// 		io.emit("user_disconnected", {name: users[socket.id]});
// 		delete users[socket.id];
// 		console.log(users);
// 	})
// });