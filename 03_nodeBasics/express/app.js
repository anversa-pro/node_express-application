
const express = require('express');

const app = express();


app.use('/',(request,response,next) => {
    console.log('This always runs');
    next();
});

app.use('/add-product',(request,response,next) => {
    console.log('In the middleware');
    response.send('<h1>The "Add Product" Page</h1>');

});

app.use('/',(request,response,next) => {
    console.log('In another middleware');
    response.send('<h1>response sent</h1>');
});

app.listen(5000);
