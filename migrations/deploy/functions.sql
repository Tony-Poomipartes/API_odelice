-- Deploy odelice:functions to pg
BEGIN;

--?-----------------------recipe-----------------
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

-- Function to update an existing post.
CREATE FUNCTION update_recipe(recipe_data json) RETURNS recipe AS $$

    UPDATE "recipe" SET
        "name" = recipe_data->>'name',
        "description" = recipe_data->>'description',
        "steps" = recipe_data->>'steps',
        "picture" = recipe_data->>'picture',
        "member_id" = (recipe_data->>'member_id')::int,
        "updated_at" = (
            COALESCE(
                (recipe_data->>'updated_at')::timestamptz,
                now()
            )
        )
    WHERE "id" = (recipe_data->>'id')::int
	RETURNING *;
$$ LANGUAGE sql STRICT;

--?-----------------------member-----------------
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

-- Function to update an existing post.
CREATE FUNCTION update_member(member_data json) RETURNS member AS $$

    UPDATE "member" SET
        "email" = member_data->>'email',
        "password" = member_data->>'password',
        "firstname" = member_data->>'firstname',
        "lastname" = member_data->>'lastname',
        "pseudo" = (member_data->>'pseudo'),
        "picture" = (member_data->>'picture'),
        "updated_at" = (
            COALESCE(
                (member_data->>'updated_at')::timestamptz,
                now()
            )
        )
    WHERE "id" = (member_data->>'id')::int
	RETURNING *;
$$ LANGUAGE sql STRICT;

--?-----------------------comment-----------------
-- Function to create a new comment.
CREATE FUNCTION new_comment(comment_data json) RETURNS comment AS $$
INSERT INTO
    "comment" (
        "content",
        "rate",
        "member_id",
        "recipe_id"
    )
VALUES
    (
        comment_data ->> 'content',
        (comment_data ->> 'rate')::numeric,
        (comment_data ->> 'member_id') :: int,
        (comment_data ->> 'recipe_id') :: int
    ) RETURNING *;
$$ LANGUAGE sql STRICT;

-- Function to update an existing post.
CREATE FUNCTION update_comment(comment_data json) RETURNS comment AS $$

    UPDATE "comment" SET
        "content" = comment_data->>'content',
        "rate" = (comment_data->>'rate')::numeric,
        "member_id" = (comment_data->>'member_id')::int,
        "recipe_id" = (comment_data->>'recipe_id')::int,
        "updated_at" = (
            COALESCE(
                (comment_data->>'updated_at')::timestamptz,
                now()
            )
        )
    WHERE "id" = (comment_data->>'id')::int
	RETURNING *;
$$ LANGUAGE sql STRICT;

--?-----------------------ingredient-----------------
-- Function to create a new ingredient.
CREATE FUNCTION new_ingredient(ingredient_data json) RETURNS ingredient AS $$
INSERT INTO
    "ingredient" (
        "name",
        "type"
    )
VALUES
    (
        ingredient_data ->> 'name',
        ingredient_data ->> 'type'
    ) RETURNING *;
$$ LANGUAGE sql STRICT;

-- Function to update an existing post.
CREATE FUNCTION update_ingredient(ingredient_data json) RETURNS ingredient AS $$

    UPDATE "ingredient" SET
        "name" = ingredient_data->>'name',
        "type" = ingredient_data->>'type',
        "updated_at" = (
            COALESCE(
                (ingredient_data->>'updated_at')::timestamptz,
                now()
            )
        )
    WHERE "id" = (ingredient_data->>'id')::int
	RETURNING *;
$$ LANGUAGE sql STRICT;

--?-----------------------recipe_has_ingredient-----------------
-- Function to create a new line for recipe_has_ingredient.
CREATE FUNCTION new_recipe_has_ingredient(recipe_has_ingredient_data json) RETURNS recipe_has_ingredient AS $$
INSERT INTO
    "recipe_has_ingredient" (
        "quantity",
        "units",
        "ingredient_id",
        "recipe_id"
    )
VALUES
    (
        (recipe_has_ingredient_data ->> 'quantity')::numeric,
        recipe_has_ingredient_data ->> 'units',
        (recipe_has_ingredient_data ->> 'ingredient_id') :: int,
        (recipe_has_ingredient_data ->> 'recipe_id') :: int
    ) RETURNING *;
$$ LANGUAGE sql STRICT;

-- Function to update an existing post.
CREATE FUNCTION update_recipe_has_ingredient(recipe_has_ingredient_data json) RETURNS recipe_has_ingredient AS $$

    UPDATE "recipe_has_ingredient" SET
        "quantity" = (recipe_has_ingredient_data->>'quantity')::numeric,
        "units" = recipe_has_ingredient_data->>'units',
        "ingredient_id" = (recipe_has_ingredient_data->>'ingredient_id')::int,
        "recipe_id" = (recipe_has_ingredient_data->>'recipe_id')::int,
        "updated_at" = (
            COALESCE(
                (recipe_has_ingredient_data->>'updated_at')::timestamptz,
                now()
            )
        )
    WHERE "id" = (recipe_has_ingredient_data->>'id')::int
	RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;