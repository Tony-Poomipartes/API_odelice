/*
 Ce fichier contient les requêtes pour la création de la base de données.
 On parle de script de DDL (Data Definition Language)
 Il sert à créer les réceptacles (ie les tables) de nos données et à établir
 les différentes contraintes qui peuvent exister sur nos données
 
 Les principales commandes de DDL :
 - CREATE
 - ALTER
 - DROP
 - RENAME
 - TRUNCATE
 - COMMENT
 */
BEGIN;

DROP TABLE IF EXISTS "name",
"adjective",
"verb",
"complement",
"combinaison";

CREATE TABLE IF NOT EXISTS "name" (
  -- [ALWAYS | BY DEFAULT]
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "content" TEXT NOT NULL UNIQUE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "adjective" (
  -- [ALWAYS | BY DEFAULT]
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "content" TEXT NOT NULL UNIQUE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "verb" (
  -- [ALWAYS | BY DEFAULT]
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "content" TEXT NOT NULL UNIQUE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "complement" (
  -- [ALWAYS | BY DEFAULT]
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "content" TEXT NOT NULL UNIQUE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "combinaison" (
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