-- Deploy odelice:member_details to pg

BEGIN;

BEGIN;
CREATE OR REPLACE VIEW "member_details" AS
SELECT
  "member".*,
  (
    SELECT json_agg(
      json_build_object(
        'id', "recipe"."id",
        'name', "recipe"."name",
        'description', "recipe"."description",
        'picture', "recipe"."picture"
      )
    )
    FROM (
      SELECT DISTINCT "recipe"."id", "recipe"."name", "recipe"."description", "recipe"."picture"
      FROM "recipe"
      WHERE "recipe"."member_id" = "member"."id"
    ) AS "recipe"
  ) AS "recipes",
  json_agg(
    json_build_object(
      'content', "comment"."content",
      'rate', "comment"."rate",
      'recipe_name', "recipe_name"."name"
    )
  ) AS "comments"
FROM
  "member"
  LEFT JOIN "recipe" ON "member"."id" = "recipe"."member_id"
  LEFT JOIN (
    SELECT DISTINCT "comment"."recipe_id", "recipe"."name"
    FROM "comment"
    LEFT JOIN "recipe" ON "recipe"."id" = "comment"."recipe_id"
  ) AS "recipe_name" ON "recipe_name"."recipe_id" = "recipe"."id"
  LEFT JOIN "comment" ON "comment"."recipe_id" = "recipe"."id"
GROUP BY
  "member"."id"
ORDER BY
  "member"."id";

COMMIT;
