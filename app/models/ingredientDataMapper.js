const debug = require('debug')('odelice:dataMapper');
const client = require('./helpers/database');
const CoreDataMapper = require('./CoreDataMapper');

/** Class representing a ingredient data mapper. */
class ingredientDataMapper extends CoreDataMapper {
    static tableName = 'ingredient';

    /**
     * create a ingredient data mapper
     *
     * @augments CoreDataMapper
     */
    constructor() {
        super();
        debug('ingredient data mapper created');
    }

    /**
    * fetch an entry according to its id
    *
    * @param {number} id - id of the entry
    * @returns an entry
    */
    async findOne(name) {
        debug(`${this.constructor.name} findOne(${name})`);
        const preparedQuery = {
            text: `SELECT * FROM "${this.constructor.tableName}" WHERE LOWER(name) ILIKE $1`,
            values: [`${name}`],
        };
        const results = await client.query(preparedQuery);
        debug(results)
        return results.rows[0];
    }
}

module.exports = new ingredientDataMapper();