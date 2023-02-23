const debug = require('debug')('odelice:controllers');
const CoreController = require('./CoreController');
const memberDataMapper = require('../../models/memberDataMapper');

/** Class representing a member controller. */
class memberController extends CoreController {
    static dataMapper = memberDataMapper;

    /**
     * create a member controller
    *
    * @augments CoreController
    */
    constructor() {
        super();
        debug('memberController created');
    }
}

module.exports = new memberController();