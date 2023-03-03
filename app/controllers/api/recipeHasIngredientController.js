const debug = require('debug')('odelice:controllers');
const CoreController = require('./CoreController');
const recipeHasIngredientDataMapper = require('../../models/recipeHasIngredientDataMapper');

/** Class representing a recipe controller. */
class recipeHasIngredientController extends CoreController {
    static dataMapper = recipeHasIngredientDataMapper;

    /**
     * create a recipe controller
    *
    * @augments CoreController
    */
    constructor() {
        super();
        debug('RecipeHasIngredientController created');
    }
}

module.exports = new recipeHasIngredientController();