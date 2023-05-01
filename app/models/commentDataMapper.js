const debug = require('debug')('odelice:dataMapper');
const CoreDataMapper = require('./CoreDataMapper');

/** Class representing a comment data mapper. */
class commentDataMapper extends CoreDataMapper {
    static tableName = 'comment';

    /**
     * create a comment data mapper
     *
     * @augments CoreDataMapper
     */
    constructor() {
        super();
        debug('comment data mapper created');
    }
}

module.exports = new commentDataMapper();