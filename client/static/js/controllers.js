trelloApp.controller('MainController', function(UserFactory, BucketFactory){
	console.log("MainController Loaded");
	var that = this;
	
	var getUser = function(){
		console.log("users controller get users");
		
		UserFactory.getUser(function(users){
			console.log(this);
			that.users = users;
		});
	}

	this.addUser = function(newUser){


		UserFactory.addUser(first_name, function(){
			getUser();
		})
	}

	if(!that.user){ addUser(); }
	getUser();

	var getBucket = function(){
		console.log("bucket controller get buckets");
		
		BucketFactory.getBucket(function(buckets){
			console.log(this);
			that.buckets = buckets;
		});
	}	

	this.addBucket = function(newBucket){
		console.log("bucket add clicked");
		if(newBucket){
			BucketFactory.addBucket(newBucket, function(){
				getBucket();
				that.newBucket = {};
			});
		}
	}

	getBucket();

});