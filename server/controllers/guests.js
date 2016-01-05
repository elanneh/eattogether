var mongoose = require("mongoose");
var Guest = mongoose.model('Guest');

module.exports = (function() {
	return {
		index: function(request, response){
			console.log("Server / Ctrl / Guest - Index")
			// var orders = [{name:'Winners!!!!'}];
			// console.log(orders);
			// response.json(customers);
			Guest.find({}, function(err, res){
				if(err){
					console.log(err);
					response.json(err);
					
				}else{
					// console.log(res);
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
	
					// console.log(res);
					response.json({status:true});
			
				
				}
			});	
		// },

		// update: function(request, response){
		// 	console.log("Server / Ctrl / Bucket - Update", request.body.new_name);
		// 	console.log(request.body.id);
		// 	Bucket.findOneAndUpdate({_id:request.body.id}, {name: request.body.new_name}, function(err, record){
		// 		if(err){
		// 			console.log(err);
		// 			response.json({status:false});
		// 		}
		// 		else{
		// 			response.json(record);
		// 		}
		// 	})
		// },
		// create_item: function(request, response){
		// 	console.log("Server / Ctrl / Items - Create", request.body.new_item);
		// 	console.log(request.body.id);
		// 	Bucket.findOneAndUpdate({_id:request.body.id}, {$addToSet: {items: request.body.new_item}}, function(err, record){
		// 		if(err){
		// 			console.log(err);
		// 			response.json({status:false});
		// 		}
		// 		else{
		// 			response.json(record);
		// 		}
		// 	})
		// },
		// destroy: function(request, response){
		// 	console.log("Server / Ctrl / Buckets - Destroy");
		// 	console.log("Destroy params id:", request.params.id);
		// 	Bucket.remove({_id:request.params.id}, function(err){
		// 		if(err){
		// 			console.log(err);
		// 			response.json({status:false});
		// 		}
		// 		else{
		// 			response.json({status:true});
		// 		}
		// 	})
		}
	}
})();