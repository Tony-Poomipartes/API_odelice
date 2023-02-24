const debug = require('debug')('odelice:dataMapper');
const CoreDataMapper = require('./CoreDataMapper');

/** Class representing a member_details data mapper. */
class member_detailsDataMapper extends CoreDataMapper {
    static tableName = 'member_details';

    /**
     * create a member_details data mapper
     *
     * @augments CoreDataMapper
     */
    constructor() {
        super();

        debug('member_details data mapper created');
    }
}

module.exports = new member_detailsDataMapper();