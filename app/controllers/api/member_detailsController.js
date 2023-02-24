const debug = require('debug')('odelice:controllers');
const CoreController = require('./CoreController');
const member_detailsDataMapper = require('../../models/member_detailsDataMapper');

/** Class representing a member_details controller. */
class member_detailsController extends CoreController {
    static dataMapper = member_detailsDataMapper;

    /**
     * create a member_details controller
    *
    * @augments CoreController
    */
    constructor() {
        super();
        debug('member_detailsController created');
    }
}

module.exports = new member_detailsController();