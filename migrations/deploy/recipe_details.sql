-- Deploy odelice:recipe_details to pg

BEGIN;

CREATE VIEW "recipe_details" AS
SELECT
  "recipe"."id" AS "recipe_id",
  "recipe"."name",
  "recipe"."description",
  "recipe"."steps",
  "recipe"."picture",
  "member"."pseudo",
  "comment"."rate",
  "comment"."content",
  "comment"."member_id" AS "comment_member_id",
  "comment_member"."pseudo" AS "comment_member_pseudo",
  "ingredient"."name" AS "ingredient_name",
  "recipe_has_ingredient"."quantity",
  "recipe_has_ingredient"."units",
  ROUND(AVG("comment"."rate")::numeric, 0) AS "avg_rate"
FROM
  "recipe"
  JOIN "member" ON "recipe"."member_id" = "member"."id"
  JOIN "recipe_has_ingredient" ON "recipe_has_ingredient"."recipe_id" = "recipe"."id"
  JOIN "comment" ON "comment"."recipe_id" = "recipe"."id"
  JOIN "member" AS "comment_member" ON "comment"."member_id" = "comment_member"."id"
  JOIN "ingredient" ON "recipe_has_ingredient"."ingredient_id" = "ingredient"."id"
GROUP BY
  "recipe"."id",
  "recipe"."name",
  "recipe"."description",
  "recipe"."steps",
  "recipe"."picture",
  "member"."pseudo",
  "comment"."rate",
  "comment"."content",
  "comment"."member_id",
  "comment_member"."pseudo",
  "ingredient"."name",
  "recipe_has_ingredient"."quantity",
  "recipe_has_ingredient"."units"
ORDER BY "recipe_id";

COMMIT;
