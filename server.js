const http = require('http');

const port = process.env.PORT || 9000;
const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Dominik jest turbo super SUPER!');
}

const server = http.createServer(requestListener);
server.listen(port);