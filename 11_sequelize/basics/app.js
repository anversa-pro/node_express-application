const path = require('path');

const express = require('express');

const app = express();

const sequelize = require('./util/database');

const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');
const { result } = require('lodash');


app.set('view engine', 'ejs');

app.set('views', 'views');


app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use(errorController.get404);

sequelize.sync()
    .then(result => {
        console.log(result);
        app.listen(5000);
    })
    .catch(err => {
        console.log(err)
    });
