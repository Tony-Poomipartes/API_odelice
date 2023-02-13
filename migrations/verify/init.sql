-- Verify cadex:init on pg
BEGIN;

SELECT
  "id",
  "content"
FROM
  "name";

SELECT
  "id",
  "content"
FROM
  "adjective";

SELECT
  "id",
  "content"
FROM
  "verb";

SELECT
  "id",
  "content"
FROM
  "complement";

SELECT
  "id",
  "name_id",
  "adjective_id",
  "verb_id",
  "complement_id",
  "correction",
  "rating"
FROM
  "combinaison";

ROLLBACK;