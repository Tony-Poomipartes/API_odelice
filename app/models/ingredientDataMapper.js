const debug = require('debug')('odelice:dataMapper');
const CoreDataMapper = require('./CoreDataMapper');

/** Class representing a ingredient data mapper. */
class ingredientDataMapper extends CoreDataMapper {
    static tableName = 'ingredient';

    /**
     * create a ingredient data mapper
     *
     * @augments CoreDataMapper
     */
    constructor() {
        super();

        debug('ingredient data mapper created');
    }
}

module.exports = new ingredientDataMapper();