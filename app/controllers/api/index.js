const recipeController = require('./recipeController');
const recipeDetailsController = require('./recipeDetailsController');
const memberController = require('./memberController');
const authController = require('./authController');
const memberDetailsController = require('./memberDetailsController');
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
    recipeDetailsController,
    memberController,
    memberDetailsController,
    commentController,
    ingredientController,
    authController
};