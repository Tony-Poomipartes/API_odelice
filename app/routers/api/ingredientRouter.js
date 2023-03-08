const express = require('express');
const tokenHandler = require('../../controllers/helpers/tokenHandler');
const controllerHandler = require('../../controllers/helpers/controllerHandler');
const { ingredientController } = require('../../controllers/api');
const validate = require('../../validations/validate');

const { post: ingredientPostSchema, put: ingredientPutSchema } = require('../../validations/schemas/ingredient.schema');

const router = express.Router();

/**
 * a ingredient type
 *
 * @typedef {object} Ingredient
 * @property {number} id - ingredient id
 * @property {string} name - ingredient name
 * @property {string} type - ingredient type
 * @property {string} created_at - date of creation
 * @property {string} updated_at - date of last update
 */

/**
 * GET /api/ingredients
 *
 * @summary get all ingredients
 * @tags Ingredients - The O'Delices ingredients
 *
 * @return {array<Ingredient>} 200 - success response
 * @return {object} 500 - internal server error
 */
router.get('/', controllerHandler(ingredientController.getAll.bind(ingredientController)));

/**
 * POST /api/ingredients
 *
 * @summary create a new ingredient
 * @tags Ingredients - The O'Delices ingredients
 *
 * @param {Ingredient} request.body - ingredient body
 *
 * @return {Ingredient} 200 - success response
 * @return {object} 500 - internal server error
 */
router.post('/', tokenHandler, validate(ingredientPostSchema, "body"), controllerHandler(ingredientController.create.bind(ingredientController)));

/**
 * GET /api/ingredients/{id}
 *
 * @summary get a ingredient
 * @tags Ingredients - The O'Delices ingredients
 *
 * @param {number} id.path - ingredient id
 *
 * @return {Ingredient} 200 - success response
 * @return {object} 500 - internal server error
 */
router.get('/:id([0-9]+)', controllerHandler(ingredientController.getOne.bind(ingredientController)));

/**
 * GET /api/ingredients/{name}
 *
 * @summary get a ingredient
 * @tags Ingredients - The O'Delices ingredients
 *
 * @param {number} id.path - ingredient id
 *
 * @return {Ingredient} 200 - success response
 * @return {object} 500 - internal server error
 */
router.get('/:name', controllerHandler(ingredientController.getOneByName.bind(ingredientController)));


/**
 * PUT /api/ingredients/{id}
 *
 * @summary modify a ingredient
 * @tags Ingredients - The O'Delices ingredients
 *
 * @param {number} id.path - ingredient id
 * 
 * @param {Ingredient} request.body - ingredient body

 *
 * @return {Ingredient} 200 - success response
 * @return {object} 500 - internal server error
 */
router.put('/:id([0-9]+)', tokenHandler, validate(ingredientPutSchema, 'body'), controllerHandler(ingredientController.modify.bind(ingredientController)));



/**
 * DELETE /api/ingredients/{id}
 *
 * @summary delete a member
 * @tags Ingredients - The O'Delices ingredients
 *
 * @param {Ingredient} id.path - member id
 *
 * @return {object} 204 - success response
 * @return {object} 500 - internal server error
 */
router.delete('/:id([0-9]+)', tokenHandler, controllerHandler(ingredientController.delete.bind(ingredientController)));

module.exports = router;