const debug = require('debug')('cadex:apiRouter');
const express = require('express');
const cadexController = require('../../controllers/api/cadexController');
const cadexErrorController = require('../../controllers/api/cadexErrorController');
const controllerHandler = require('../../controllers/controllerHandler');
const validate = require('../../validation/validator');
const NotFoundError = require('../../errors/NotFoundError');
const { get: cadexGetSchema, post: cadexPostSchema } = require('../../validation/schemas/cadex.schema');

const router = express.Router();

/**
 * GET /api/cadex
 *
 * @summary get a random cadex
 * @tags Cadex
 *
 * @param {string} name.query - custom name
 * @param {string} adjective.query - custom adjective
 * @param {string} verb.query - custom verb
 * @param {string} complement.query - custom complement
 *
 * @return {cadex} 200 - success response
 * @return {error} 400 - bad request
 */

debug('adding GET /cadex route');
router.get('/cadex', validate(cadexGetSchema, 'query'), controllerHandler(cadexController.get));

/**
 * POST /api/cadex
 *
 * @summary add new cadex terms
 * @tags Cadex
 *
 * @param {cadex} request.body.required - new cadex parts
 * @returns {cadex} 200 - success response
 * @returns {error} 400 - invalid input
 */
debug('adding POST /cadex route');
router.post('/cadex', validate(cadexPostSchema, 'body'), controllerHandler(cadexController.post));

router.use((request, response, next) => {
  next(new NotFoundError());
});

router.use(cadexErrorController.errorHandler);

module.exports = router;
