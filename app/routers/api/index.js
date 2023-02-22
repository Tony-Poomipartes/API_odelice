const express = require('express');
const recipeRouter = require('./recipeRouter');
const { apiController } = require('../../controllers/api');
const NoResourceFoundError = require('../../errors/NoResourceFoundError');
const apiErrorHandler = require('../../errors/helpers/apiErrorHandler');

const router = express.Router();

/**
 * GET /api
 *
 * @summary get API documentation URL
 * @tags Docs - The blog's API documentation
 *
 * @return {object} 200 - success response
 */
router.all('/', apiController.getHome);

router.use('/recipes', recipeRouter);

router.use((request, response, next) => {
    next(new NoResourceFoundError());
});

router.use(apiErrorHandler);

module.exports = router;


