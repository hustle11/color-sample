var path = require('path');
var express = require('express');
var io = require('socket.io');
var lessMiddleware = require('less-middleware');

var app = express()
	, server = require('http').createServer(app)
	, io = io.listen(server);

app.configure(function(){
	app.use(lessMiddleware({
		src: path.join(__dirname, '/public'),
		compress: true
	}));
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	res.sendfile('/public/index.html');
});

server.listen(8888);

io.sockets.on('connection', function(socket){
	socket.emit('colorchange', {color: '#acd30d'});
});