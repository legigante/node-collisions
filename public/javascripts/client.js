$(function() {
	var socket = io.connect('http://51.254.98.195:800');

	socket.on('cr-log', function(msg){
		$("#log").html(JSON.stringify(msg));
	});
	
	socket.on('cr-refresh', function(msg){
		$("#log").html(JSON.stringify(msg));
	});
	
});