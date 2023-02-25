-- Deploy odelice:recipe_details to pg BEGIN;
BEGIN;

CREATE OR REPLACE VIEW "recipe_details" AS
SELECT 
	"recipe"."id",
	"recipe"."name",
	"recipe"."description",
	"recipe"."steps",
	"recipe"."picture",
	"member"."pseudo",
	(
        SELECT ROUND(AVG("comment"."rate")::NUMERIC, 0) AS "avg_rate"
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

COMMIT;
