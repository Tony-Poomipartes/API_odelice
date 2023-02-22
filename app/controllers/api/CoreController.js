const debug = require('debug')('odelice:controllers');

/** Class representing an abstract core controller. */
class CoreController {
    static dataMapper;

    /**
     * responds with all entries from a table
     *
     * @param {Object} _
     * @param {Object} response
     */
    async getAll(_, response) {
        debug(`${this.constructor.name} getAll`);
        const results = await this.constructor.dataMapper.findAll();
        response.json(results);
    }

    /**
 * responds with one entry from a table
 *
 * @param {Object} request
 * @param {Object} response
 */
    async getOne(request, response) {
        debug(`${this.constructor.name} getOne`);
        const { id } = request.params;
        const results = await this.constructor.dataMapper.findByPk(id);
        if (results) {
            return response.json(results);
        }
        return response.status(204).send();
    }

    /**
 * create one entry in a table
 *
 * @param {Object} request
 * @param {Object} response
 */
    async create(request, response) {
        debug(`${this.constructor.name} create`);
        const results = await this.constructor.dataMapper.create(request.body);
        response.json(results);
    }

}

module.exports = CoreController;
