const debug = require('debug')('odelice:controllers');
const CoreController = require('./CoreController');
const commentDataMapper = require('../../models/commentDataMapper');

/** Class representing a comment controller. */
class commentController extends CoreController {
    static dataMapper = commentDataMapper;

    /**
     * create a comment controller
    *
    * @augments CoreController
    */
    constructor() {
        super();
        debug('commentController created');
    }
}

module.exports = new commentController();