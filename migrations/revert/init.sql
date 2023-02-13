-- Revert cadex:init from pg
BEGIN;

DROP TABLE "name",
"adjective",
"verb",
"complement",
"combinaison";

COMMIT;