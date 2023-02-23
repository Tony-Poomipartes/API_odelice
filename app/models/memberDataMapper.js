const debug = require('debug')('odelice:dataMapper');
const CoreDataMapper = require('./CoreDataMapper');

/** Class representing a member data mapper. */
class memberDataMapper extends CoreDataMapper {
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
}

module.exports = new memberDataMapper();