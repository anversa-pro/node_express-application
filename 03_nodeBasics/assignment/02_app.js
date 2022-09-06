const http = require('http');

const routes = require('./02_routes');

const server = http.createServer(routes);

server.listen(5000);
