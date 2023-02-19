-- Deploy oblog:post_with_category to pg

BEGIN;

CREATE VIEW "post_with_category" AS
SELECT
"post".*,
"category"."label" AS "category"
FROM "post"
JOIN "category" ON "post"."category_id" = "category"."id"
ORDER BY "id";

COMMIT;
