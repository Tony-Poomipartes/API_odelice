const express = require('express');
const controllerHandler = require('../../controllers/helpers/controllerHandler');
const { recipeController, recipe_detailsController } = require('../../controllers/api');
const validate = require('../../validations/validate');

const { post: recipePostSchema, patch: recipePatchSchema } = require('../../validations/schemas/recipe.schema');

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
router.get('/', controllerHandler(recipe_detailsController.getAll.bind(recipe_detailsController)));

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
router.get('/:id([0-9]+)', controllerHandler(recipe_detailsController.getOne.bind(recipe_detailsController)));

/**
 * PATCH /api/recipes/{id}
 *
 * @summary modify a recipe
 * @tags Recipes - The O'Delices recipes
 *
 * @param {number} id.path - recipe id
 * 
 * @param {Recipe} request.body - recipe body
 *
 * @return {Recipe} 200 - success response
 * @return {object} 500 - internal server error
 */
router.patch('/:id([0-9]+)', validate(recipePatchSchema, 'body'), controllerHandler(recipeController.modify.bind(recipeController)));

/**
 * DELETE /api/recipes/{id}
 *
 * @summary delete a recipe
 * @tags Recipes - The O'Delices recipes
 *
 * @param {number} id.path - category id
 *
 * @return {object} 204 - success response
 * @return {object} 500 - internal server error
 */
router.delete('/:id([0-9]+)', controllerHandler(recipeController.delete.bind(recipeController)));

module.exports = router;