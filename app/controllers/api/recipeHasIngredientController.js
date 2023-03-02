const debug = require('debug')('odelice:controllers');
const CoreController = require('./CoreController');
const recipeWithDetailsDataMapper = require('../../models/recipeDetailsDataMapper');

/** Class representing a recipe controller. */
class RecipeWithDetailsController extends CoreController {
    static dataMapper = recipeWithDetailsDataMapper;

    /**
     * create a recipe controller
    *
    * @augments CoreController
    */
    constructor() {
        super();
        debug('RecipeWithDetailsController created');
    }
}

module.exports = new RecipeWithDetailsController();