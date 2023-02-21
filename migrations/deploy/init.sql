-- Deploy odelice:init to pg


BEGIN;

CREATE DOMAIN "email" AS text CHECK (
    value ~ '^[a-zA-Z0-9.!#$%&''*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'
);


CREATE TABLE "member" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" email NOT NULL UNIQUE,--La contrainte unique rajoute automatiquement un index sur le champ email.
    "password" VARCHAR(60) NOT NULL,--mot de passe
    "firstname" VARCHAR(60) NOT NULL,--prenom
    "lastname" VARCHAR(60) NOT NULL,--nom de famille
    "pseudo" VARCHAR(60) NOT NULL UNIQUE,--surnom
    "picture" VARCHAR(255) ,--avatar
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);



CREATE TABLE "recipe" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(60) NOT NULL,--nom de la recette
    "description" TEXT NOT NULL,-- description de la recette
    "picture" VARCHAR(255),-- photo de la recette
    "member_id" INT NOT NULL REFERENCES "member"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);


CREATE TABLE "comment" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "content" TEXT,-- contenu du commentaire
    "rate" INT NOT NULL,--note de la recette
    "member_id" INT NOT NULL REFERENCES "member"("id"),
    "recipe_id" INT NOT NULL REFERENCES "recipe"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "ingredient" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(60) UNIQUE NOT NULL,-- nom de l'ingredient
    "type" VARCHAR(60) NOT NULL,-- nom de l'ingredient
    --"picture" VARCHAR UNIQUE,-- photo de l'ingredient
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "recipe_has_ingredient" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "quantity" INT NOT NULL,-- CHECK (quantity > 0),--quantité de l'ingredient
    "units" VARCHAR(60),-- unité de mesure
    "recipe_id" INT NOT NULL REFERENCES "recipe"("id"),
    "ingredient_id" INT NOT NULL REFERENCES "ingredient"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);



COMMIT;
