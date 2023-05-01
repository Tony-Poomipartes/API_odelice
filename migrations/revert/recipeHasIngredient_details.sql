-- Revert odelice:recipeHasIngredient_details from pg

BEGIN;

-- XXX Add DDLs here.
DROP VIEW "recipe_with_ingredients", "recipe_ingredients", "recipe_info" CASCADE;
COMMIT;
