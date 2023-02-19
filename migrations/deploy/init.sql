-- Deploy oblog:init to pg
BEGIN;

CREATE TABLE "category" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "route" TEXT NOT NULL UNIQUE CHECK("route" ~ '^[a-z0-9/-]+$'),
  "label" TEXT NOT NULL UNIQUE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "post" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "slug" TEXT NOT NULL UNIQUE CHECK("slug" ~ '^[a-z0-9-]+$'),
  "title" TEXT NOT NULL UNIQUE,
  "excerpt" TEXT NOT NULL,
  "content" TEXT NOT NULL,
  "category_id" INT NOT NULL REFERENCES "category"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

COMMIT;