const path = require('path');

const debug = require('debug')('cadex:server');
const express = require('express');
const expressSwagger = require('express-jsdoc-swagger');
const logger = require('./helpers/logger');

const router = require('./routers');

const app = express();

const swaggerOptions = {
  info: {
    version: '1.0.0',
    title: 'Cadex API',
  },
  baseDir: path.join(__dirname, 'app'),
  filesPattern: './**/*.js',
  swaggerUIPath: '/api-docs',
  exposeSwaggerUI: true,
};

expressSwagger(app)(swaggerOptions);

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use((request, response, next) => {
  logger.info({ method: request.method, url: request.url }, 'incoming request');
  debug('incoming request', {
    method: request.method,
    url: request.url,
    body: request.body,
    query: request.query,
  });
  next();
});

app.use(router);

module.exports = app;
