-- Revert odelice:member_details from pg

BEGIN;

-- XXX Add DDLs here.

DROP VIEW "member_details";
COMMIT;
