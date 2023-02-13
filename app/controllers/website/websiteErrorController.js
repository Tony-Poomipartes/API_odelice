const debug = require('debug')('cadex:websiteErrorController');
const logger = require('../../helpers/logger');

const websiteErrorController = {
  /* eslint-disable-next-line no-unused-vars */
  errorHandler(error, request, response, next) {
    debug(error.message);
    const status = error.statusCode || 500;
    response.status(status).render('error', { error: { status, message: error.message } });
  },
};

module.exports = websiteErrorController;
