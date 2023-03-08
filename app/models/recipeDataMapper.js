const debug = require('debug')('odelice:dataMapper');
const CoreDataMapper = require('./CoreDataMapper');
const client = require('./helpers/database');

/** Class representing a recipe data mapper. */
class RecipeDataMapper extends CoreDataMapper {
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
       * fetch all entries
       *
       * @returns {array} array of entries
       */
    async findAll() {
        debug(`${this.constructor.name} findAll`);
        const preparedQuery = {
            text:
            `SELECT * FROM "recipe_details" ORDER BY "id"`,
            
        };
        const results = await client.query(preparedQuery);
        return results.rows;
    }


    /**
    * fetch one recipes with comments and ingredients according to id
    *
    * @param {number} id - the id of the recipe
    * @returns {array} an entry
    */
    async findByPk(id) {
        debug(`${this.constructor.name} findByPk(${id})`);
        const preparedQuery = {
            text:
            `SELECT * FROM "recipe_details" WHERE id=$1`,
            values: [id],
        };
        const results = await client.query(preparedQuery);
        return results.rows[0];
    }
}

module.exports = new RecipeDataMapper();