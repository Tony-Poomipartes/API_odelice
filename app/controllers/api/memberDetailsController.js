const debug = require('debug')('odelice:controllers');
const CoreController = require('./CoreController');
const memberDetailsDataMapper = require('../../models/memberDetailsDataMapper');

/** Class representing a member_details controller. */
class MemberDetailsController extends CoreController {
    static dataMapper = memberDetailsDataMapper;

    /**
     * create a member_details controller
    *
    * @augments CoreController
    */
    constructor() {
        super();
        debug('memberDetailsController created');
    }

    /**
* responds with one entry from a table
*
* @param {Object} request
* @param {Object} response
*/
    async getOneDetails(request, response) {
        debug(`${this.constructor.name} getOneDetails`);
        const { id } = request.params;
        const results = await this.constructor.dataMapper.findByPk(id);
        if (results) {
            return response.json(results);
        }
        return response.status(204).send();
    }
}

module.exports = new MemberDetailsController();