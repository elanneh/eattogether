var mongoose = require("mongoose");


module.exports = function(app) {
  	var guests = require('../controllers/guests.js');
	app

	// - - - guests - - -
    // Index
	.get('/guests', function(request, response) { 
		guests.index(request, response) })
	// New
	.get('/guests/new', function(request, response) { 
		guests.create(request, response) })
	// Show
	.get('/guests/:id', function(request, response) { 
		guests.show(request, response) })
	// Edit 
	.post('/guests/:id/edit', function(request, response) { 
		guests.update(request, response) })
	// Create
	.post('/guests', function(request, response) { 
		guests.create(request, response) })	
	// Destroy
	.delete('/guests/:id', function(request, response) { 
		guests.destroy(request, response) })
	// Update
	.put('/guests/:id', function(request, response) { 
		guests.update(request, response) })
};