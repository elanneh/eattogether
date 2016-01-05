trelloApp.factory('UserFactory', function($http, $location){
	return {

		user = "",
		getUser: function(callback){
			console.log("UserFactory getUser");
			// var response = [{first_name: "winners"}];
			callback(user);
			})
		},
		addUser: function(first_name){
			console.log(first_name);
			user = first_name;
		}
	}
});

trelloApp.factory('BucketFactory', function($http, $location){
	return {

		getBucket: function(callback){
			console.log("BucketFactory getBucket");

			$http.get('/buckets').success(function(response){
				callback(response);
			})
		},
		addBucket: function(newBucket, callback){
			if(newBucket){
				console.log("BucketFactory add ", newBucket);
				$http.post('/buckets', newBucket).success(function(response){
					callback(response);

				})
			}
		}
	}
});
