var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
  console.log('Servidor rodando em http://localhome:8080')
}).listen(8080); 