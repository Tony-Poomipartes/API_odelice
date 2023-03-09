const debug = require('debug')('odelice:dataMapper');
const CoreDataMapper = require('./CoreDataMapper');
const client = require('./helpers/database');

/** Class representing a member data mapper. */
class MemberDataMapper extends CoreDataMapper {
	static tableName = 'member';

	/**
	* create a member data mapper
	*
	* @augments CoreDataMapper
	*/
	constructor() {
		super();
		debug('member data mapper created');
	}
    async modify(id, modObject) {
        debug(`${this.constructor.name} modify(${id})`);
        const preparedQuery = {
            text: `
                SELECT * FROM update_${this.constructor.tableName}($1)
            `,
            values: [{ ...modObject, id }],
        };
        const results = await client.query(preparedQuery);
        return results.rows[0];
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

	/**
	* fetch an entry according to its id
	*
	* @param {number} id - id of the entry
	* @returns an entry
	*/
	async findByPk(id) {
		debug(`${this.constructor.name} findByPk(${id})`);
		const preparedQuery = {
			text:
			  `SELECT * FROM "member_details" WHERE id=$1`,
			values: [id],
		};
		const results = await client.query(preparedQuery);
		return results.rows[0];
	}
	
}

module.exports = new MemberDataMapper();