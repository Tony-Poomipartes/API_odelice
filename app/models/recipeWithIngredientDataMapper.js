const debug = require('debug')('odelice:dataMapper');
const CoreDataMapper = require('./CoreDataMapper');
const client = require('./helpers/database');
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

    /**
       * fetch all entries
       *
       * @returns {array} array of entries
       */
    async findAll(ingredients) {
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
            WHERE "ingredient"."name" IN (${ingredients.map((_, i) => `$${i+1}`).join(', ')})
            GROUP BY "recipe_id"
            HAVING COUNT(DISTINCT "ingredient"."id")  >0 
        ) AS "subquery" ON "recipe_with_ingredients"."id" = "subquery"."recipe_id";`,
        values: ingredients,
        };
        const results = await client.query(preparedQuery);
        return results.rows;
    }


    /**
    * fetch one recipes with comments and ingredients according to id
    *
    * @param {number} id - the id of the recipe
    * @returns {array} an entry
    */
    async findByPk(id) {
        debug(`${this.constructor.name} findByPk(${id})`);
        const preparedQuery = {
            text: `
                SELECT 
                    "recipe"."id",
                    "recipe"."name",
                    "recipe"."description",
                    (
                        SELECT json_agg(json_build_object('name', "ingredient"."name", 'quantity', "recipe_has_ingredient"."quantity", 'units', "recipe_has_ingredient"."units"))
                        FROM (
                            SELECT DISTINCT ON ("ingredient_id") *
                            FROM "recipe_has_ingredient"
                            WHERE "recipe_id" = "recipe"."id"
                            ) AS "recipe_has_ingredient"
                        JOIN "ingredient" ON "recipe_has_ingredient"."ingredient_id" = "ingredient"."id"
                    ) AS "ingredients",
                    "recipe"."steps",
                    "recipe"."picture",
                    "member"."pseudo",
                    (
                        SELECT ROUND(AVG("comment"."rate")::NUMERIC, 2) AS "avg_rate"
                        FROM "comment"
                        WHERE "recipe_id" = "recipe"."id"
                        ),
                    (
                        SELECT json_agg(json_build_object('rate', "comment"."rate", 'content', "comment"."content", 'member_pseudo', "member"."pseudo"))
                        FROM (
                            SELECT DISTINCT ON (
                                    "member_id",
                                    "recipe_id"
                                    ) *
                            FROM "comment"
                            WHERE "recipe_id" = "recipe"."id"
                            ) AS "comment"
                        JOIN "member" ON "comment"."member_id" = "member"."id"
                        ) AS "comments"
                FROM "recipe"
                JOIN "member" ON "recipe"."member_id" = "member"."id"
                WHERE "recipe"."id"=$1
                ORDER BY "recipe"."id";
  `,
            values: [id],
        };
        const results = await client.query(preparedQuery);
        return results.rows[0];
    }
}

module.exports = new RecipeDataMapper();