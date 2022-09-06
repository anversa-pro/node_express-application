const fs = require('fs');
const { PassThrough } = require('stream');

const requestHandler = (request, response) => {

    const url = request.url;
    // const method = request.method;
    response.setHeader('Content-Type', 'text/html');

    if (url === '/'){
        response.write('<html>');
        response.write('<head><title>Gretting Message</title></head>');
        response.write('<body>');
        response.write('<h1>Hello from the other side</h1><h2>This is my first assignment </h2>');
        response.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>');
        //response.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
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
    if (url === '/create-user'){
        const body = [];
        request.on('data', chunk => {
            body.push(chunk);
        });
        request.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody.split('=')[1]);
        });
        response.statusCode = 302;
        response.setHeader('Location','/');
        return response.end();  
    }

    response.write('<html>');
    response.write('<head><title>Default Page</title></head>');
    response.write('<body><h1>No content here</h1></body>');
    response.write('</html>');
    response.end();
};

module.exports = requestHandler;
