-- Revert odelice:init from pg

BEGIN;


-- XXX Add DDLs here.
DROP TABLE
"member", "recipe", "comment", "ingredient", "recipe_has_ingredient" ;
DROP DOMAIN 
"email";
COMMIT;
