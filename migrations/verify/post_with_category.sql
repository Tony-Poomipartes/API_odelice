-- Verify oblog:post_with_category on pg

BEGIN;

SELECT "id", "category" FROM "post_with_category" WHERE false;

ROLLBACK;
