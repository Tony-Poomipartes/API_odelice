-- Revert oblog:functions from pg

BEGIN;

DROP FUNCTION "new_post", "update_post", "new_category", "update_category";

COMMIT;
