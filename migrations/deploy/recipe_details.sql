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
ROUND(AVG("comment"."rate")::numeric, 2) AS "avg_rate",
json_agg(
  json_build_object(
    'rate', "comment"."rate",
    'content', "comment"."content",
    'member_pseudo', "comment_member"."pseudo"
  )
) AS "comments",
json_agg(
  json_build_object(
    'name', "ingredient"."name",
    'quantity', "recipe_has_ingredient"."quantity",
    'units', "recipe_has_ingredient"."units"
  )
) AS "ingredients"
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
"member"."pseudo"

ORDER BY "recipe_id";

COMMIT;
