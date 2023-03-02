const express = require('express');
const controllerHandler = require('../../controllers/helpers/controllerHandler');
const { recipeController, recipeDetailsController } = require('../../controllers/api');
const validate = require('../../validations/validate');

const { post: recipePostSchema, patch: recipePatchSchema } = require('../../validations/schemas/recipe.schema');

const router = express.Router();

/**
 * a recipe type
 *
 * @typedef {object} Recipe
 * @property {string} quantity - quantity of the ingredient
 * @property {string} units - units of the quantity
 * @property {string} recipe_id - recipe recipe_id
 * @property {number} member_id - member member_ids
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
router.get('/:id([0-9]+)', controllerHandler(recipeController.getOneDetails.bind(recipeController)));

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