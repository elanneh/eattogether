$(document).ready(function(){

			$.get('/guests', function(res){
			for(i=0; i<res.length; i++){

				if(res[i].type === "appetizer"){
					$("#appetizer").append("<div class='rsvp'>" + "<h3>" + res[i].name + "<br><br>" + res[i].dish + " </h3></div>");
				}else if(res[i].type === "entree"){
					$("#entree").append("<div class='rsvp'>" + "<h3>" + res[i].name + "<br><br>" + res[i].dish + " </h3></div>");
				} else if(res[i].type === "dessert"){

					$("#dessert").append("<div class='rsvp'>" + "<h3>" + res[i].name + "<br><br>" + res[i].dish + " </h3></div>");
					}
				}
			});

			$("#rsvp_form").submit(function(){
				var input = $(".input").val();
					if(input === ""){
						alert("no freeloaders!!");
						return false;		
				}
				else{
					$.post('/guests', function(response){
						location.reload();
						console.log(response);
					});
				}
			});
		
		});