-- Deploy odelice:functions to pg
BEGIN;

-- Function to create a new recipe.
CREATE FUNCTION new_recipe(recipe_data json) RETURNS recipe AS $$
INSERT INTO
    "recipe" (
        "name",
        "description",
        "steps",
        "picture",
        "member_id"
    )
VALUES
    (
        recipe_data ->> 'name',
        recipe_data ->> 'description',
        recipe_data ->> 'steps',
        recipe_data ->> 'picture',
        (recipe_data ->> 'member_id') :: int
    ) RETURNING *;

$$ LANGUAGE sql STRICT;

-- Function to create a new member.
CREATE FUNCTION new_member(member_data json) RETURNS member AS $$
INSERT INTO
    "member" (
        "email",
        "password",
        "firstname",
        "lastname",
        "pseudo",
        "picture"
    )
VALUES
    (
        member_data ->> 'email',
        member_data ->> 'password',
        member_data ->> 'firstname',
        member_data ->> 'lastname',
        member_data ->> 'pseudo',
        member_data ->> 'picture'
    ) RETURNING *;

$$ LANGUAGE sql STRICT;

COMMIT;
