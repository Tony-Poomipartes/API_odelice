-- Revert oblog:functions from pg

BEGIN;

DROP FUNCTION "new_recipe", "update_recipe", "new_member";


COMMIT;
