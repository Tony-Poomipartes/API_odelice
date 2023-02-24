const debug = require('debug')('odelice:controllers');
const CoreController = require('./CoreController');
const recipe_detailsDataMapper = require('../../models/recipe_detailsDataMapper');

/** Class representing a recipe_details controller. */
class Recipe_detailsController extends CoreController {
    static dataMapper = recipe_detailsDataMapper;

    /**
     * create a recipe_details controller
    *
    * @augments CoreController
    */
    constructor() {
        super();
        debug('recipe_detailsController created');
    }
}

module.exports = new Recipe_detailsController();
