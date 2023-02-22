const express = require('express');
const controllerHandler = require('../../controllers/helpers/controllerHandler');
const { recipeController } = require('../../controllers/api');
const validate = require('../../validations/validate');

const { post: recipePostSchema } = require('../../validations/schemas/recipe.schema');

const router = express.Router();

/**
 * a recipe type
 *
 * @typedef {object} Recipe
 * @property {number} id - recipe id
 * @property {string} name - recipe name
 * @property {string} description - recipe descrition
 * @property {string} steps - recipe steps
 * @property {string} picture - recipe picture
 * @property {string} member_id - member member_id
 * @property {string} created_at - date of creation
 * @property {string} updated_at - date of last update
 */

/**
 * GET /api/recipes
 *
 * @summary get all recipes
 * @tags Recipes - The O'Delices recipes
 *
 * @return {array<Recipe>} 200 - success response
 * @return {object} 500 - internal server error
 */
router.get('/', controllerHandler(recipeController.getAll.bind(recipeController)));

/**
 * POST /api/recipes
 *
 * @summary create a new recipe
 * @tags Recipes - The O'Delices recipes
 *
 * @param {Recipe} request.body - recipe
 *
 * @return {Recipe} 200 - success response
 * @return {object} 500 - internal server error
 */
router.post('/', validate(recipePostSchema, "body"), controllerHandler(recipeController.create.bind(recipeController)));

/**
 * GET /api/recipes/{id}
 *
 * @summary get a recipe
 * @tags Recipes - The O'Delices recipes
 *
 * @param {number} id.path - recipe id
 *
 * @return {Recipe} 200 - success response
 * @return {object} 500 - internal server error
 */
router.get('/:id([0-9]+)', controllerHandler(recipeController.getOne.bind(recipeController)));



module.exports = router;