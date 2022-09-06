const fs = require('fs');

const requestHandler = (request, response) => {

    const url = request.url;
    // const method = request.method;
    response.setHeader('Content-Type', 'text/html');

    if (url === '/'){
        response.write('<html>');
        response.write('<head><title>Gretting Message</title></head>');
        response.write('<body>');
        response.write('<h1>Hello from the other side</h1><h2>This is my first assignment </h2>');
        response.write('</body>');
        response.write('</html>');
        return response.end();    
    }

    if (url === '/users'){
        // const dummyUsers = ['Alicia', 'Antonia', 'Azucena', 'Abril', 'Amelia', 'Ayelen'];
        response.write('<html>');
        response.write('<head><title>Gretting Message</title></head>');
        response.write('<body>');
        response.write('<ul><li>Alicia</li><li>Antonia</li><li>Azucena</li><li>Abril</li><li>Amelia</li><li>Ayelen</li></ul>');
        response.write('</body>');
        response.write('</html>');
        return response.end();  
    }

    response.write('<html>');
    response.write('<head><title>Default Page</title></head>');
    response.write('<body><h1>No content here</h1></body>');
    response.write('</html>');
    response.end();
};

module.exports = requestHandler;
