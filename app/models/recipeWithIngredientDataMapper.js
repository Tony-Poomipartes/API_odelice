const debug = require('debug')('odelice:dataMapper');
const CoreDataMapper = require('./CoreDataMapper');
const client = require('./helpers/database');
/** Class representing a recipe data mapper. */
class recipeWithIngredientDataMapper extends CoreDataMapper {
    static tableName = 'recipe_with_ingredients';

    /**
     * create a recipe data mapper
     *
     * @augments CoreDataMapper
     */
    constructor() {
        super();
        debug('recipe data mapper created');
    }

    /**
       * fetch all entries
       *
       * @returns {array} array of entries
       */
    async findAllrecipes(list) {
        debug(`${this.constructor.name} findAll`);
        const preparedQuery = {
            text: `SELECT 
            "recipe_with_ingredients"."id",
            "recipe_with_ingredients"."name",
            "recipe_with_ingredients"."description",
            "recipe_with_ingredients"."steps",
            "recipe_with_ingredients"."picture",
            "recipe_with_ingredients"."member_id",
            "recipe_with_ingredients"."created_at",
            "recipe_with_ingredients"."updated_at",
            "recipe_with_ingredients"."ingredients"
        FROM "recipe_with_ingredients"
        JOIN (
            SELECT "recipe_id"
            FROM "recipe_has_ingredient"
            JOIN "ingredient" ON "recipe_has_ingredient"."ingredient_id" = "ingredient"."id"
            WHERE "ingredient"."name" IN (${list.map((_, i) => `$${i+1}`).join(', ')})
            GROUP BY "recipe_id"
            HAVING COUNT(DISTINCT "ingredient"."id")  >0 
        ) AS "subquery" ON "recipe_with_ingredients"."id" = "subquery"."recipe_id";`,
        values: [...list],
        };
        console.log(list);
        const results = await client.query(preparedQuery);
        return results.rows;
    }
}

module.exports = new recipeWithIngredientDataMapper();
        //(${ingredients.map((_, i) => `$${i+1}`).join(', ')})