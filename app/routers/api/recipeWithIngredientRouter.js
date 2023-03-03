const express = require('express');
const controllerHandler = require('../../controllers/helpers/controllerHandler');
const { recipeController } = require('../../controllers/api');
const validate = require('../../validations/validate');

const { post: recipePostSchema, patch: recipePatchSchema } = require('../../validations/schemas/recipe.schema');

const router = express.Router();

/**
 * a recipe type
 *
 * @typedef {object} Recipe
 * @property {object} ingredients - recipe id
 */

/**
 * POST /api/recipes
 *
 * @summary create a new recipe
 * @tags Recipes - The O'Delices recipes
 *
 * @param {Recipe} request.body - recipe body
 *
 * @return {Recipe} 200 - success response
 * @return {object} 500 - internal server error
 */
router.post('/', validate(recipePostSchema, 'body'), controllerHandler(recipeController.create.bind(recipeController)));



module.exports = router;