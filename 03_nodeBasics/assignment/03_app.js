const http = require('http');

const routes = require('./03_routes');

const server = http.createServer(routes);

server.listen(5000);
