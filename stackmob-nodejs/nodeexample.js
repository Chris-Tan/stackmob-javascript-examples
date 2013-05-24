$ = require('jquery');
XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

$.support.cors = true;
$.ajaxSettings.xhr = function () {
    return new XMLHttpRequest;
}

require('stackmob');


var http = require('http');
http.createServer(function (req, res) {

StackMob.init({
    publicKey: "YOUR PUBLIC KEY",
    apiVersion: 0
});


var users = new StackMob.Users();
users.fetch({
	success: function(model) {
		console.info(model.toJSON());
	},
	error: function(err) {
		console.info(err);
	}
});



  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');