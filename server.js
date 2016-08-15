'use strict';
const express 		= require('express');
const server 		= express();
const fs 			= require('fs');
const searchTown 	= require('./app/utils/search-town');


server.set('views', `${__dirname}/app/views`);
server.set('view engine', 'pug');
server.use( express.static( `${__dirname}/public` ) );

server.get('/', function (req, res) {
	res.render('index');
});

server.get('/:name_town', function (req, res) {
	let name = req.params.name_town;

	searchTown(name);
		.then(function(obj){
			res.render('town', {town: obj});
		});
		.catch(function(err){
			res.redirect('/');
		});

});

server.listen(3000, function () {
	console.log('Geography run on http://localhost:3000');
});