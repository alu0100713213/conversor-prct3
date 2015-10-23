var static = require('node-static');

var fileServer = new static.Server('./');

console.log("Visit http://localhost:8080/tests/test_blanket.html")
require('http').createServer(function (requerst, response)  {
	request.addListener('end', functionn() {
		fileServer.serve(request, response);
	}).resume();
}).listen(8080);
