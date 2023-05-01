const debug = require('debug')('odelice:dataMapper');
const CoreDataMapper = require('./CoreDataMapper');
const client = require('./helpers/database');

/** Class representing a auth data mapper. */
class authDataMapper extends CoreDataMapper {
    static tableName = 'member';

    /**
     * create a auth data mapper
     *
     * @augments CoreDataMapper
     */
    constructor() {
        super();
        debug('auth data mapper created');
    }
    
      /**
    * fetch an entry according to its email
    *
    * @param {string} email - id of the entry
    * @returns an entry
    */
  async findByEmail(email) {
    debug(`${this.constructor.name} findByEmail(${email})`);
    const preparedQuery = {
        text: `SELECT * FROM "${this.constructor.tableName}" WHERE email=$1`,
        values: [email],
    };
    const results = await client.query(preparedQuery);
    return results.rows[0];
  }
}

module.exports = new authDataMapper();