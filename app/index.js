const debug = require('debug')('odelice:app');
const path = require('path');
const express = require('express');
const cors = require('cors');
const router = require('./routers');
const swagger = require('./helpers/swagger');

const app = express();

//template engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//swagger setup
swagger(app, path.join(__dirname, 'routers'));

//cors setup
const corsOptions = {
    origin: process.env.CORS_DOMAIN ?? '*',
};

//middlewares setup
app.use(cors(corsOptions));
app.use('/devdoc', express.static(path.join(__dirname, '../documentation/')));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((request, _, next) => {
    debug(`${request.method} ${request.url} - ${request.ip}`);
    next();

});

app.use(router);

module.exports = app;