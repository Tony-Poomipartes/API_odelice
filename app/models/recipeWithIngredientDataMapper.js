const debug = require('debug')('odelice:dataMapper');
const CoreDataMapper = require('./CoreDataMapper');
const client = require('./helpers/database');
const InternalServerError = require('../errors/InternalServerError');

/** Class representing a recipe data mapper. */
class RecipeWithIngredientDataMapper extends CoreDataMapper {
    static tableName = 'recipe';
    /**
    * create a recipe data mapper
    *
    * @augments CoreDataMapper
    */
    constructor() {
        super();
        debug('recipe data mapper created');
    }

    /**
    * fetch all recipe from ingredient
    *
    * @param {number} ingredientId
    * @returns {array}
    */
    async findRecipeFromIngredient(ingredientId) {
        debug(`${this.constructor.name} findPostsFromCategory(${ingredientId})`);
        const preparedQuery = {
            text: `SELECT * FROM get"${this.tableName}" WHERE category_id=$1 ORDER BY "id"`,
            values: [categoryId],
        };
        const results = await client.query(preparedQuery);
        return results.rows;
    }

    /**
    * remove an entry
    *
    * @param {number} id - the entry id
    */
    async delete() {
    throw new InternalServerError('This is a view, you can only select rows from it');
    }
}

module.exports = new RecipeWithIngredientDataMapper();
