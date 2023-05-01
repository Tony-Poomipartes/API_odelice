const debug = require('debug')('odelice:error');
const InternalServerError = require('../InternalServerError');
/**
 * express error middleware
 *
 * @param {Error} error - an error
 * @param {Object} request - http request object
 * @param {Object} response - http response object
 * @param {function} next - go to next mw function
 */
/* eslint-disable-next-line */
const errorHandler = (error, request, response, next) => {
    if (!error.httpStatusCode) {
        /* eslint-disable-next-line */
        error = new InternalServerError(error);
    }
    const responseObject = { message: error.message };
    if (process.env.NODE_ENV === 'development' && error.detail) {
        responseObject.detail = error.detail;
    }
    response
        .status(error.httpStatusCode)
        .render('error', { error: responseObject.message, status: error.httpStatusCode, detail: responseObject?.detail });
    debug(error.message, { detail: error?.detail });
};

module.exports = errorHandler;