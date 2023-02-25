const express = require('express');
const recipeRouter = require('./recipeRouter');
const recipeDetailsRouter = require('./recipeDetailsRouter');
const memberRouter = require('./memberRouter');
const commentRouter = require('./commentRouter');
const ingredientRouter = require('./ingredientRouter');
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
router.use('/recipes_details', recipeDetailsRouter);
router.use('/members', memberRouter);
router.use('/comments', commentRouter);
router.use('/ingredients', ingredientRouter);

router.use((request, response, next) => {
    next(new NoResourceFoundError());
});

router.use(apiErrorHandler);

module.exports = router;


