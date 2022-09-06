// Server using Node Modules System

const http = require('http');

const routes = require('./routes');

// Single export
// const server = http.createServer(routes);

// Group export
const server = http.createServer(routes.handler);
console.log(routes.someText);


server.listen(3000);