var trelloApp = angular.module('trelloApp', ['ngRoute']);

trelloApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'MainController',
		controllerAs: 'main',
		templateUrl: 'index.html'
	})	

	
	.otherwise('/')
})