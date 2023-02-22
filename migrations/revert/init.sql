-- Revert odelice:init from pg

BEGIN;


-- XXX Add DDLs here.
DROP TABLE
"member", "recipe", "comment", "ingredient", "recipe_has_ingredient" ;
DROP DOMAIN
"email";
<<<<<<< HEAD
=======

>>>>>>> 7371a66debbbd72b5b4986511b94e2aef12936fc
COMMIT;
