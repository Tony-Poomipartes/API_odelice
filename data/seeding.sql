BEGIN;

INSERT INTO
  "name" ("content")
VALUES
  ('un cheval'),
  ('la mairie de Neuilly-sur-Seine'),
  ('une huître'),
  ('Julie Andrieu'),
  ('Jacky et sa Subaru Impreza'),
  ('la gendarmerie hollandaise'),
  ('un chauve'),
  ('Simon'),
  ('2 chatons');

INSERT INTO
  "adjective" ("content")
VALUES
  ('bien cuit'),
  ('blond'),
  ('guilleret'),
  ('ankylosé'),
  ('blafard'),
  ('rasé de près'),
  ('amputé d''un doigt');

INSERT INTO
  "verb" ("content")
VALUES
  ('consulte'),
  ('franchit'),
  ('cuisine'),
  ('remet en question'),
  ('s''immole pour protester contre'),
  ('enduit de confiture'),
  ('instaure'),
  ('déguste');

INSERT INTO
  "complement" ("content")
VALUES
  ('un seau en plastique'),
  ('la consommation de café'),
  ('Yann'),
  ('3 roues de voiture'),
  ('2 mains gauches'),
  ('un skieur débutant'),
  ('la Mer Noire');

INSERT INTO
  "combinaison" (
    "name_id",
    "adjective_id",
    "verb_id",
    "complement_id",
    "correction"
  )
VALUES
  (3, 1, 1, 3, 'une huître bien cuite consulte Yann');

COMMIT;