const path = require('path');

const express = require('express');

const app = express();

const db = require('./util/database');

const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

// Basic option to fetch and print on console the table
// db.execute('SELECT * FROM products')
// .then(result => {
//     console.log(result)
//     console.log(result[0]);
// }) 
// .catch(err => {
//     console.log(err);
// });


app.set('view engine', 'ejs');

app.set('views', 'views');


app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use(errorController.get404);


app.listen(5000);