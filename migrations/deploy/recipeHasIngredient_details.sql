-- Deploy odelice:recipeHasIngredient_details to pg

BEGIN;

CREATE OR REPLACE VIEW "recipe_info" AS
SELECT 
    "id",
    "name",
    "description",
    "steps",
    "picture",
    "member_id",
    "created_at",
    "updated_at"
FROM "recipe";

CREATE OR REPLACE VIEW "recipe_ingredients" AS
SELECT 
    "recipe_id",
    json_agg(json_build_object('name', "ingredient"."name", 'quantity', "recipe_has_ingredient"."quantity", 'units', "recipe_has_ingredient"."units")) AS "ingredients"
FROM "recipe_has_ingredient"
JOIN "ingredient" ON "recipe_has_ingredient"."ingredient_id" = "ingredient"."id"
GROUP BY "recipe_has_ingredient"."recipe_id";

CREATE OR REPLACE VIEW "recipe_with_ingredients" AS
SELECT
    "recipe_info"."id",
    "recipe_info"."name",
    "recipe_info"."description",
    "recipe_info"."steps",
    "recipe_info"."picture",
    "recipe_info"."member_id",
    "recipe_info"."created_at",
    "recipe_info"."updated_at",
    "recipe_ingredients"."ingredients"
FROM "recipe_info"
JOIN "recipe_ingredients" ON "recipe_info"."id" = "recipe_ingredients"."recipe_id";


COMMIT;
