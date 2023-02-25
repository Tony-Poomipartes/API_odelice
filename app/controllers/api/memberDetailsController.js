const debug = require('debug')('odelice:controllers');
const CoreController = require('./CoreController');
const memberDetailsDataMapper = require('../../models/memberDetailsDataMapper');

/** Class representing a member_details controller. */
class memberDetailsController extends CoreController {
    static dataMapper = memberDetailsDataMapper;

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

module.exports = new memberDetailsController();