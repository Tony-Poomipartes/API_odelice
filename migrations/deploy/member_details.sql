-- Deploy odelice:member_details to pg

BEGIN;

BEGIN;
CREATE OR REPLACE VIEW "member_details" AS
SELECT
  "member"."id",
  "member"."pseudo",
  "member"."firstname",
  "member"."lastname",
  "member"."email",
  "member"."picture",
  (
    SELECT json_agg(
      json_build_object(
        'id', "recipe"."id",
        'name', "recipe"."name",
        'description', "recipe"."description"
      )
    )
    FROM "recipe"
    WHERE "recipe"."member_id" = "member"."id"
  ) AS "recipes",
  (
    SELECT json_agg(
      json_build_object(
        'pseudo', (SELECT "pseudo" FROM "member" WHERE "member"."id" = "comment"."member_id"),
        'name', (SELECT "name" FROM "recipe" WHERE "recipe"."id" = "comment"."recipe_id"),
        'content', "comment"."content",
        'rate', "comment"."rate"
      )
    )
    FROM "comment"
    WHERE "comment"."member_id" = "member"."id"
  ) AS "comments"
FROM "member"
GROUP BY
  "member"."id",
  "member"."pseudo",
  "member"."firstname",
  "member"."lastname",
  "member"."email",
  "member"."picture"
ORDER BY "member"."id";

COMMIT;
