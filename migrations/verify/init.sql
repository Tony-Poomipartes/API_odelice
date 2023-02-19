-- Verify oblog:init on pg
BEGIN;

SELECT
  "id",
  "route",
  "label"
FROM
  "category"
WHERE false;

SELECT
  "id",
  "slug",
  "title",
  "excerpt",
  "content",
  "category_id"
FROM
  "post"
WHERE false;

ROLLBACK;
