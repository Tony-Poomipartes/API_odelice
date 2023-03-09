const debug = require('debug')('odelice:dataMapper');
const CoreDataMapper = require('./CoreDataMapper');
const client = require('./helpers/database');
const InternalServerError = require('../errors/InternalServerError');

/** Class representing a recipe data mapper. */
class recipeHasIngredientDataMapper extends CoreDataMapper {
    static tableName = 'recipe_has_ingredient';
    /**
    * create a recipe data mapper
    *
    * @augments CoreDataMapper
    */
    constructor() {
        super();
        debug('recipe data mapper created');
    }
}

module.exports = new recipeHasIngredientDataMapper();
