var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text'});
    res.end('Hello World')
}).listen(8080);

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text'});
    res.end("Hijo de Puta")
}).listen(8081);

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end()
}).listen(8082);