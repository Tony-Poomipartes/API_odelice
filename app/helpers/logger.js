const bunyan = require('bunyan');

const logger = bunyan.createLogger({ name: 'Odelice' });

module.exports = logger;