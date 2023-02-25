-- Deploy odelice:member_details to pg

BEGIN;

CREATE OR REPLACE VIEW  "member_details" AS
SELECT
  "member".*,
  "recipe"."id" AS "recipe_id",
  "recipe"."name",
  "recipe"."description",
  "recipe"."steps",
  "recipe"."picture" AS "recipe_picture",
  "recipe"."created_at" AS "recipe_created_at",
  "recipe"."updated_at" AS "recipe_updated_at",
  json_agg(
    json_build_object(
      'content', "comment"."content",
      'rate', "comment"."rate",
      'recipe_name', "recipe"."name"
    )
  ) AS "comments"
FROM
  "member"
  LEFT JOIN "recipe" ON "member"."id" = "recipe"."member_id"
  LEFT JOIN "comment" ON "recipe"."id" = "comment"."recipe_id"
GROUP BY
  "member"."id",
  "recipe"."id"
ORDER BY
  "member"."id";

COMMIT;
