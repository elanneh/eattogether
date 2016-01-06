var mongoose = require("mongoose");
var Guest = mongoose.model('Guest');

module.exports = (function() {
	return {
		index: function(request, response){
			console.log("Server / Ctrl / Guest - Index")
			Guest.find({}, function(err, res){
				if(err){
					console.log(err);
					response.json(err);
					
				}else{
			
					response.json(res);
				}
			})
		},

		create: function(request, response){
			console.log("Server / Ctrl / Guests - Create");
			console.log(request.body);
			console.log(request.body.dish);
			console.log(request.body.type);
			var guest = new Guest;
			guest.name = request.body.name;
			guest.dish = request.body.dish;
			guest.type = request.body.type;
				
			guest.save(function(err){
				if(err){
					console.log(err);
					response.json({status:false});
				}
				else{	
					response.json({status:true});					
				}
			});	
		}
	}
})();