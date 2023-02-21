-- Revert oblog:functions from pg

BEGIN;

DROP FUNCTION "new_recipe", "new_member";

COMMIT;
