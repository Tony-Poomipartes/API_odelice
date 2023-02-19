-- Deploy oblog:functions to pg

BEGIN;

-- Function to create a new post.
CREATE FUNCTION new_post(post_data json) RETURNS post AS $$

  INSERT INTO "post" ("slug", "title", "excerpt", "content", "category_id")
	VALUES (
		post_data->>'slug',
		post_data->>'title',
		post_data->>'excerpt',
		post_data->>'content',
		(post_data->>'category_id')::int
	)
	RETURNING *;

$$ LANGUAGE sql STRICT;

-- Function to update an existing post.
CREATE FUNCTION update_post(post_data json) RETURNS post AS $$

    UPDATE "post" SET
      "slug" = post_data->>'slug',
      "title" = post_data->>'title',
      "excerpt" = post_data->>'excerpt',
      "content" = post_data->>'content',
      "category_id" = (post_data->>'category_id')::int
    WHERE "id" = (post_data->>'id')::int
	  RETURNING *;

$$ LANGUAGE sql STRICT;


-- Function to create a new category.
CREATE FUNCTION new_category(category_data json) RETURNS category AS $$

  INSERT INTO "category" ("label", "route")
	VALUES (
		category_data->>'label',
		category_data->>'route'
	)
	RETURNING *;

$$ LANGUAGE sql STRICT;

-- Function to update an existing category.
CREATE FUNCTION update_category(category_data json) RETURNS category AS $$

    UPDATE "category" SET
      "label" = category_data->>'label',
      "route" = category_data->>'route'
    WHERE "id" = (category_data->>'id')::int
	  RETURNING *;

$$ LANGUAGE sql STRICT;

COMMIT;
