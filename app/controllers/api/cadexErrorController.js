const debug = require('debug')('cadex:errorController');
const logger = require('../../helpers/logger');

const cadexErrorController = {
  /* eslint-disable-next-line no-unused-vars */
  errorHandler(error, request, response, next) {
    logger.error(error.originalError?.message || error.message);
    debug(error.originalError?.message || error.message);

    let { message } = error;
    if (error.code === '23505') {
      message = 'Toutes ou partie de ces données existent déjà';
    }

    const status = error.statusCode || 500;
    response.status(status).json({ error: message });
  },
};

module.exports = cadexErrorController;
