const debug = require('debug')('odelice:controllers');
const CoreController = require('./CoreController');
const ingredientDataMapper = require('../../models/ingredientDataMapper');

/** Class representing a ingredient controller. */
class ingredientController extends CoreController {
    static dataMapper = ingredientDataMapper;

    /**
     * create a ingredient controller
    *
    * @augments CoreController
    */
    constructor() {
        super();
        debug('ingredientController created');
    }
}

module.exports = new ingredientController();