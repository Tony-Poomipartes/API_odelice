const debug = require('debug')('oblog:app');
const path = require('path');
const express = require('express');
const cors = require('cors');
const router = require('./routers');
const swagger = require('./helpers/swagger');

const app = express();

// template engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Swagger setup
swagger(app, path.join(__dirname, 'routers'));

// CORS setup
const corsOptions = {
  origin: process.env.CORS_DOMAINS ?? '*',
};

// Middlewares setup
app.use(cors(corsOptions));
app.use('/devdoc', express.static(path.join(__dirname, '../documentation/')));
app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.json());

app.use((request, _, next) => {
  debug(`${request.method} ${request.url} - ${request.ip}`);
  next();
});

app.use(router);

module.exports = app;
