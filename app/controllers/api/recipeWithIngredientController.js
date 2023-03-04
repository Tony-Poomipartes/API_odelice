const debug = require('debug')('odelice:controllers');
const CoreController = require('./CoreController');
const recipeWithIngredientDataMapper = require('../../models/recipeWithIngredientDataMapper');

/** Class representing a recipe controller. */
class recipeWithIngredientController extends CoreController {
    static dataMapper = recipeWithIngredientDataMapper;

    /**
     * create a recipe controller
    *
    * @augments CoreController
    */
    constructor() {
        super();
        debug('recipeWithIngredientController created');
    }
    async getAllRecipes(request, response) {
      debug(`${this.constructor.name} getAll`);
      const results = await this.constructor.dataMapper.findAllrecipes(request.body);
      response.json(results);
  }
}

module.exports = new recipeWithIngredientController();