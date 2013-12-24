define('window', function(){
	return window;
});

define(['window', 'jquery', 'socket.io'], function(window, $, io){
	return {
		run: function(){
			var socket = io.connect('http://localhost:8888');
			socket.on('colorchange', function(data){
				$('#colorbox').css({'background-color': data.color});
			});
		}
	};
});