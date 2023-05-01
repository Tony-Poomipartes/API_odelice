const debug = require('debug')('odelice:controllers');
const CoreController = require('./CoreController');
const ingredientDataMapper = require('../../models/ingredientDataMapper');

/** Class representing a ingredient controller. */
class ingredientController extends CoreController {
    static dataMapper = ingredientDataMapper;

    /**
     * create a ingredient controller
    *
    * @augments CoreController
    */
    constructor() {
        super();
        debug('ingredientController created');
    }

    /**
    * responds with one entry from a table
    *
    * @param {Object} request
    * @param {Object} response
    */
    async getOneByName(request, response) {
        debug(`${this.constructor.name} getOneByName`);
        const { name } = request.params;
        const results = await this.constructor.dataMapper.findOne(name);
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
        const { name, type } = request.body;

        const capitalizedTerms = {
            name: (name).replace(/^\w/, (name) => name.toUpperCase()),
            type: (type).replace(/^\w/, (type) => type.toUpperCase())
        };
        request.body = capitalizedTerms;
        const results = await this.constructor.dataMapper.create(request.body);
        response.json(results);
    }

    /**
    * modify one entry in a table
    *
    * @param {Object} request
    * @param {Object} response
    */
    async modify(request, response) {
        debug(`${this.constructor.name} modify`);
        const { id } = request.params;
        const { name, type } = request.body;

        const capitalizedTerms = {
            name: (name).replace(/^\w/, (name) => name.toUpperCase()),
            type: (type).replace(/^\w/, (type) => type.toUpperCase())
        };
        request.body = capitalizedTerms;

        const results = await this.constructor.dataMapper.modify(id, request.body);
        response.json(results);
    }
}

module.exports = new ingredientController();