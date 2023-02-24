const recipeController = require('./recipeController');
const recipe_detailsController = require('./recipe_detailsController');
const memberController = require('./memberController');
const member_detailsController = require('./member_detailsController');
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
    recipe_detailsController,
    memberController,
    member_detailsController,
    commentController,
    ingredientController
};