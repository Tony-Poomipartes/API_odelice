-- Verify odelice:init on pg

BEGIN;

-- XXX Add verifications here.
SELECT
  "id",
  "email",
  "password",
  "firstname",
  "lastname",
  "pseudo",
  "picture"
FROM
  "member"
WHERE false;

SELECT
  "id",
  "name",
  "description",
  "steps",
  "picture",
  "member_id"
FROM
  "recipe"
WHERE false;

SELECT
  "id",
  "content",
  "rate",
  "member_id",
  "recipe_id"
FROM
  "comment"
WHERE false;

SELECT
  "id",
  "name",
  "type"
FROM
  "ingredient"
WHERE false;

SELECT
  "id",
  "quantity",
  "units",
  "recipe_id",
  "ingredient_id"
FROM
  "recipe_has_ingredient"
WHERE false;
ROLLBACK;
