const debug = require('debug')('odelice:dataMapper');
const CoreDataMapper = require('./CoreDataMapper');
const client = require('./helpers/database');

/** Class representing a recipe data mapper. */
class RecipeWithDetailsDataMapper extends CoreDataMapper {
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
    async findAllDetails() {
        debug(`${this.constructor.name} findAllDetails`);
        const preparedQuery = {
            text: `
                SELECT 
                    "recipe"."id",
                    "recipe"."name",
                    "recipe"."description",
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
                        ) AS "comments",
                    (
                        SELECT json_agg(json_build_object('name', "ingredient"."name", 'quantity', "recipe_has_ingredient"."quantity", 'units', "recipe_has_ingredient"."units"))
                        FROM (
                            SELECT DISTINCT ON ("ingredient_id") *
                            FROM "recipe_has_ingredient"
                            WHERE "recipe_id" = "recipe"."id"
                            ) AS "recipe_has_ingredient"
                        JOIN "ingredient" ON "recipe_has_ingredient"."ingredient_id" = "ingredient"."id"
                        ) AS "ingredients"
                FROM "recipe"
                JOIN "member" ON "recipe"."member_id" = "member"."id"
                ORDER BY "recipe"."id";
            `,
        };
        const results = await client.query(preparedQuery);
        return results.rows;
    }

    /**
    * fetch an entry according to its id
    *
    * @param {number} id - id of the entry
    * @returns an entry
    */
    async findOneDetails(id) {
        debug(`${this.constructor.name} findOneDetails(${id})`);
        const preparedQuery = {
            text: `
                SELECT 
                    "recipe"."id",
                    "recipe"."name",
                    "recipe"."description",
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
                        ) AS "comments",
                    (
                        SELECT json_agg(json_build_object('name', "ingredient"."name", 'quantity', "recipe_has_ingredient"."quantity", 'units', "recipe_has_ingredient"."units"))
                        FROM (
                            SELECT DISTINCT ON ("ingredient_id") *
                            FROM "recipe_has_ingredient"
                            WHERE "recipe_id" = "recipe"."id"
                            ) AS "recipe_has_ingredient"
                        JOIN "ingredient" ON "recipe_has_ingredient"."ingredient_id" = "ingredient"."id"
                        ) AS "ingredients"
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

module.exports = new RecipeWithDetailsDataMapper();


