const express = require('express');
const controllerHandler = require('../../controllers/helpers/controllerHandler');
const { recipeHasIngredientController} = require('../../controllers/api');
const validate = require('../../validations/validate');

const { post: recipeHasIngredientPostSchema, patch: recipeHasIngredientPatchSchema } = require('../../validations/schemas/recipeHasIngredient.schema');

const router = express.Router();

/**
 * a RecipeHasIngredient type
 *
 * @typedef {object} RecipeHasIngredient
 * @property {string} quantity - quantity of the ingredient
 * @property {string} units - units of the quantity
 * @property {string} recipe_id - recipe recipe_id
 * @property {number} ingredient_id - ingredient ingredient_ids
 */

/**
 * GET /api/RecipeHasIngredient
 *
 * @summary get all RecipeHasIngredient
 * @tags RecipeHasIngredient - The O'Delices recipes
 *
 * @return {array<RecipeHasIngredient>} 200 - success response
 * @return {object} 500 - internal server error
 */
router.get('/', controllerHandler(recipeHasIngredientController.getAll.bind(recipeHasIngredientController)));

/**
 * GET /api/RecipeHasIngredient/{id}
 *
 * @summary get a RecipeHasIngredient
 * @tags RecipeHasIngredient - The O'Delices RecipeHasIngredient
 *
 * @param {number} id.path - RecipeHasIngredient id
 *
 * @return {RecipeHasIngredient} 200 - success response
 * @return {object} 500 - internal server error
 */
router.get('/:id([0-9]+)', controllerHandler(recipeHasIngredientController.getOne.bind(recipeHasIngredientController)));

/**
 * POST /api/RecipeHasIngredient
 *
 * @summary create a new recipe
 * @tags RecipeHasIngredient - The O'Delices RecipeHasIngredient
 *
 * @param {RecipeHasIngredient} request.body - RecipeHasIngredient body
 *
 * @return {RecipeHasIngredient} 200 - success response
 * @return {object} 500 - internal server error
 */
router.post('/', validate(recipeHasIngredientPostSchema, 'body'), controllerHandler(recipeHasIngredientController.create.bind(recipeHasIngredientController)));

/**
 * PUT /api/RecipeHasIngredient/{id}
 *
 * @summary modify a recipe
 * @tags RecipeHasIngredient - The O'Delices RecipeHasIngredient
 *
 * @param {number} id.path - recipe id
 * 
 * @param {RecipeHasIngredient} request.body - RecipeHasIngredient body
 *
 * @return {RecipeHasIngredient} 200 - success response
 * @return {object} 500 - internal server error
 */
router.put('/:id([0-9]+)', validate(recipeHasIngredientPatchSchema, 'body'), controllerHandler(recipeHasIngredientController.modify.bind(recipeHasIngredientController)));

/**
 * DELETE /api/RecipeHasIngredient/{id}
 *
 * @summary delete a recipe
 * @tags RecipeHasIngredient - The O'Delices RecipeHasIngredient
 *
 * @param {number} id.path - category id
 *
 * @return {object} 204 - success response
 * @return {object} 500 - internal server error
 */
router.delete('/:id([0-9]+)', controllerHandler(recipeHasIngredientController.delete.bind(recipeHasIngredientController)));

module.exports = router;