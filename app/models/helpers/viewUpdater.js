const debug = require('debug')('odelice:viewupdater');
const client = require('./database');

  /**
  * update member_details view entries
  *
  * @returns {array} array of entries
  */
  async function MemberDetailsSqlViewUpdate() {
    debug('member_details view updated');
    const preparedQuery = {
      text: `
        CREATE OR REPLACE VIEW "member_details" AS
          SELECT
            "member"."id",
            "member"."pseudo",
            "member"."firstname",
            "member"."lastname",
            "member"."email",
            "member"."picture",
            (
              SELECT json_agg(
                json_build_object(
                  'id', "recipe"."id",
                  'name', "recipe"."name",
                  'description', "recipe"."description"
                )
              )
              FROM "recipe"
              WHERE "recipe"."member_id" = "member"."id"
            ) AS "recipes",
            (
              SELECT json_agg(
                json_build_object(
                  'pseudo', (SELECT "pseudo" FROM "member" WHERE "member"."id" = "comment"."member_id"),
                  'name', (SELECT "name" FROM "recipe" WHERE "recipe"."id" = "comment"."recipe_id"),
                  'content', "comment"."content",
                  'rate', "comment"."rate"
                )
              )
              FROM "comment"
              WHERE "comment"."member_id" = "member"."id"
            ) AS "comments"
          FROM "member"
          GROUP BY
            "member"."id",
            "member"."pseudo",
            "member"."firstname",
            "member"."lastname",
            "member"."email",
            "member"."picture"
          ORDER BY "member"."id";
      `,
    };
    const results = await client.query(preparedQuery);
    return results.rows;
  };

  //*-------------------recipes--------------------
  /**
  * update recipe_details view entries
  *
  * @returns {array} array of entries
  */
  async function RecipeDetailsSqlViewUpdate() {
    debug('recipe_details view updated');
    const preparedQuery = {
      text: `
        CREATE OR REPLACE VIEW "member_details" AS
          SELECT
            "member"."id",
            "member"."pseudo",
            "member"."firstname",
            "member"."lastname",
            "member"."email",
            "member"."picture",
          (
            SELECT json_agg(
              json_build_object(
                'id', "recipe"."id",
                'name', "recipe"."name",
                'description', "recipe"."description"
              )
            )
            FROM "recipe"
            WHERE "recipe"."member_id" = "member"."id"
          ) AS "recipes",
          (
            SELECT json_agg(
              json_build_object(
                'pseudo', (SELECT "pseudo" FROM "member" WHERE "member"."id" = "comment"."member_id"),
                'name', (SELECT "name" FROM "recipe" WHERE "recipe"."id" = "comment"."recipe_id"),
                'content', "comment"."content",
                'rate', "comment"."rate"
              )
            )
            FROM "comment"
            WHERE "comment"."member_id" = "member"."id"
          ) AS "comments"
          FROM "member"
          GROUP BY
            "member"."id",
            "member"."pseudo",
            "member"."firstname",
            "member"."lastname",
            "member"."email",
            "member"."picture"
          ORDER BY "member"."id"
      `,
    };
    const results = await client.query(preparedQuery);
    return results.rows;
  };

module.exports = { 
  MemberDetailsSqlViewUpdate, 
  RecipeDetailsSqlViewUpdate 
};