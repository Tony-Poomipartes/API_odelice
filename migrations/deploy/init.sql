-- Deploy cadex:init to pg
BEGIN;

CREATE TABLE "name" (
  -- [ALWAYS | BY DEFAULT]
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "content" TEXT NOT NULL UNIQUE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "adjective" (
  -- [ALWAYS | BY DEFAULT]
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "content" TEXT NOT NULL UNIQUE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "verb" (
  -- [ALWAYS | BY DEFAULT]
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "content" TEXT NOT NULL UNIQUE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "complement" (
  -- [ALWAYS | BY DEFAULT]
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "content" TEXT NOT NULL UNIQUE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "combinaison" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name_id" INT NOT NULL REFERENCES "name"("id"),
  "adjective_id" INT NOT NULL REFERENCES "adjective"("id"),
  "verb_id" INT NOT NULL REFERENCES "verb"("id"),
  "complement_id" INT NOT NULL REFERENCES "complement"("id"),
  "correction" TEXT NOT NULL UNIQUE,
  "rating" SMALLINT NOT NULL DEFAULT 0,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ,
  UNIQUE(
    "name_id",
    "adjective_id",
    "verb_id",
    "complement_id"
  )
);

COMMIT;