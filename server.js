const express = require('express');
const server = express();

server.set('views', `${__dirname}/app/views`);
server.set('view engine', 'pug');

server.get('/', function (req, res) {
	res.render('index');
});

server.listen(3000, function () {
	console.log('Geography run on http://localhost:3000');
});