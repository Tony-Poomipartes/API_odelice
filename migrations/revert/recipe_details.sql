-- Revert odelice:recipe_details from pg

BEGIN;

-- XXX Add DDLs here.
DROP VIEW "recipe_details";
COMMIT;
