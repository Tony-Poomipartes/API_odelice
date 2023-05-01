require('dotenv').config();
const debug = require('debug')('oblog:odelice');
const http = require('http');
const logger = require('./app/helpers/logger');
const app = require('./app');

const port = process.env.PORT ?? 3000;

const server = http.createServer(app);

server.listen(port, () => {
  logger.info('HTTP server ready');
  debug(`Server ready: http://localhost:${port}`);
});
