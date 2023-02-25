const debug = require('debug')('odelice:controllers');
const CoreController = require('./CoreController');
const recipeWithDetailsDataMapper = require('../../models/recipeWithDetailsDataMapper');

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

    /**
    * responds with all entries from a table
    *
    * @param {Object} _
    * @param {Object} response
    */
    async getAllDetails(_, response) {
        debug(`${this.constructor.name} getAllDetails`);
        const results = await this.constructor.dataMapper.findAllDetails();
        response.json(results);
    }

    /**
   * responds with all posts from a given category
   *
   * @param {Object} request
   * @param {Object} response
   */
    async getOneDetails(request, response) {
        debug(`${this.constructor.name} getOneDetails`);
        const recipeId = request.params.id;
        const result = await this.constructor.dataMapper.findOneDetails(recipeId);
        response.json(result);
    }
}

module.exports = new RecipeWithDetailsController();