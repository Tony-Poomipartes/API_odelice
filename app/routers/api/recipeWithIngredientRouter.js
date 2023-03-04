const express = require('express');
const controllerHandler = require('../../controllers/helpers/controllerHandler');
const { recipeWithIngredientController } = require('../../controllers/api');
const validate = require('../../validations/validate');

// const { post: recipeWithIngredientPostSchema, patch: recipeWithIngredientPatchSchema } = require('../../validations/schemas/recipeWithIngredient.schema');

const router = express.Router();

/**
 * a recipeWithIngredient type
 *
 * @typedef {object} recipeWithIngredient
 * @property {Array} ingredients - ingredient's name
 */

/**
 * POST /api/recipeWithIngredient
 *
 * @summary create a new recipeWithIngredient
 * @tags recipeWithIngredient - The O'Delices recipeWithIngredients
 *
 * @param {recipeWithIngredient} request.body - recipeWithIngredient body
 *
 * @return {recipeWithIngredient} 200 - success response
 * @return {object} 500 - internal server error
 */
router.post('/', controllerHandler(recipeWithIngredientController.getAllRecipes.bind(recipeWithIngredientController)));



module.exports = router;