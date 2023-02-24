const debug = require('debug')('odelice:dataMapper');
const CoreDataMapper = require('./CoreDataMapper');

/** Class representing a recipe data mapper. */
class RecipeDataMapper extends CoreDataMapper {
    static tableName = 'recipe';

    /**
     * create a recipe data mapper
     *
     * @augments CoreDataMapper
     */
    constructor() {
        super();
        debug('recipe data mapper created');
    }
}

module.exports = new RecipeDataMapper();