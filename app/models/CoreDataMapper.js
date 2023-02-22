const debug = require('debug')('odelice:dataMapper');
const client = require('./helpers/database');

/** Class representing a abstract data mapper. */
class CoreDataMapper {
    static tableName;

    /**
    * fetch all entries
    *
    * @returns {array} array of entries
    */
    async findAll() {
        debug(`${this.constructor.name} findAll`);
        const preparedQuery = {
            text: `SELECT * FROM "${this.constructor.tableName}" ORDER BY "id"`,
        };
        const results = await client.query(preparedQuery);
        return results.rows;
    }

    /**
    * fetch an entry according to its id
    *
    * @param {number} id - id of the entry
    * @returns an entry
    */
    async findByPk(id) {
        debug(`${this.constructor.name} findByPk(${id})`);
        const preparedQuery = {
            text: `SELECT * FROM "${this.constructor.tableName}" WHERE id=$1`,
            values: [id],
        };
        const results = await client.query(preparedQuery);
        return results.rows[0];
    }

    /**
    * create an entry
    *
    * @param {Object} obj - the entry to create
    * @returns {Object} the created entry
    */
    async create(createObj) {
        debug(`${this.constructor.name} create`);

        const preparedQuery = {
            text: `
                SELECT * FROM new_${this.constructor.tableName}($1)
            `,
            values: [createObj],
        };
        const results = await client.query(preparedQuery);
        return results.rows[0];
    }
}

module.exports = CoreDataMapper;