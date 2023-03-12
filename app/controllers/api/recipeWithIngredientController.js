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
    const ingredients = request.query.name;
    const results = await this.constructor.dataMapper.findAllrecipes(ingredients);
    console.log(request.query.name);
    response.json(results);
  }
}

module.exports = new recipeWithIngredientController();
