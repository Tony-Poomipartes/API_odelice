const recipeController = require('./recipeController');
const recipeHasIngredientController = require('./recipeHasIngredientController');
const recipeWithIngredientController = require('./recipeWithIngredientController');
const memberController = require('./memberController');
const authController = require('./authController');
const commentController = require('./commentController');
const ingredientController = require('./ingredientController');

const apiController = {
    /**
     * responds with api documentation url
     *
     * @param {Object} request
     * @param {Object} response
     */
    getHome(request, response) {
        const docRoute = process.env.API_DOCUMENTATION_ROUTE ?? '/api-docs';
        const fullURL = `${request.protocol}://${request.get('host')}${docRoute}`;
        response.json({ documentation_url: fullURL });
    },
};

module.exports = {
    apiController,
    recipeController,
    memberController,
    commentController,
    ingredientController,
    authController,
    recipeHasIngredientController,
    recipeWithIngredientController
};