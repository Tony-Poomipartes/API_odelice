const debug = require('debug')('odelice:controllers');
const CoreController = require('./CoreController');
const recipeDataMapper = require('../../models/recipeDataMapper');

/** Class representing a recipe controller. */
class RecipeController extends CoreController {
    static dataMapper = recipeDataMapper;

    /**
     * create a recipe controller
    *
    * @augments CoreController
    */
    constructor() {
        super();
        debug('recipeController created');
    }
}

module.exports = new RecipeController();