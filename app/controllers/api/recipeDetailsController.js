const debug = require('debug')('odelice:controllers');
const CoreController = require('./CoreController');
const recipeDetailsDataMapper = require('../../models/recipeDetailsDataMapper');

/** Class representing a recipe controller. */
class RecipeDetailsController extends CoreController {
    static dataMapper = recipeDetailsDataMapper;

    /**
     * create a recipe controller
    *
    * @augments CoreController
    */
    constructor() {
        super();
        debug('RecipeDetailsController created');
    }

    /**
   * responds with one recipes with comments and ingredients
   *
   * @param {Object} request
   * @param {Object} response
   */
    async getOneDetails(request, response) {
        debug(`${this.constructor.name} getOneDetails`);
        const { id } = request.params;
        const results = await this.constructor.dataMapper.findByPk(id);
        if (results) {
            return response.json(results);
        }
        return response.status(204).send();
    }
}

module.exports = new RecipeDetailsController();