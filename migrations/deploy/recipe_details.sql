-- Deploy odelice:recipe_details to pg BEGIN;
BEGIN;

CREATE OR REPLACE VIEW "recipe_details" AS
SELECT 
	"recipe"."id",
	"recipe"."name",
	"recipe"."description",
	(
		SELECT json_agg(json_build_object('id',"recipe_has_ingredient"."id",'name', "ingredient"."name", 'quantity', "recipe_has_ingredient"."quantity", 'units', "recipe_has_ingredient"."units", 'ingredient_id', "recipe_has_ingredient"."ingredient_id" ))
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
  "member"."id" as "creator_id",
	(
    SELECT ROUND(AVG("comment"."rate")::NUMERIC, 0) AS "avg_rate"
    FROM "comment"
    WHERE "recipe_id" = "recipe"."id"
  ),
	(
		SELECT json_agg(json_build_object('rate', "comment"."rate", 'content', "comment"."content", 'author', "member"."pseudo",'author_id',"member"."id"))
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
ORDER BY "recipe"."id";

COMMIT;
