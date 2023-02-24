const debug = require('debug')('odelice:dataMapper');
const CoreDataMapper = require('./CoreDataMapper');

/** Class representing a recipe_details data mapper. */
class Recipe_detailsDataMapper extends CoreDataMapper {
    static tableName = 'recipe_details';

    /**
     * create a recipe_details data mapper
     *
     * @augments CoreDataMapper
     */
    constructor() {
        super();
        debug('recipe_details data mapper created');
    }
}

module.exports = new Recipe_detailsDataMapper();