var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<center>');
  res.write('<h1>Hello World!</h1>');
  res.write('<h1>Welcome to First NodeJS</h1>');
  res.write('</center>');
  res.end();

}).listen(8080);
