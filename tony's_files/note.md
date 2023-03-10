# voir avec l'équipe sur la base de donnée

table Recipe

conserve t'on les champs "Rate" et "Steps"?(garder steps NOT NULL , a comfirmer)
champ "description" enlever NULL( ne pas mettre obligatoirement NULL)

Table Recipe_has_ingredient

unit garde t'on NOT NULL(exemple: 1(unit null) poulet)

test pour un changement
odelicesback-development.up.railway.app
odelicesback-production.up.railway.app

BEGIN;

INSERT INTO recipe (name, description, steps, picture, member_id)
VALUES ('curry', 'curry rapide', '[Faire sauté vos legumes , ajoutez la pate de curry, melanger avec du lait de coco, remuer pendant 20mn a feu doux]', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frestaurant-nonla-amersfoort.nl%2Fwp-content%2Fuploads%2F2020%2F01%2F84.-Paneng-Curry.jpg&f=1&nofb=1&ipt=bacd450a011379f0f4d7bca1cd69792e9e1a7013c4b89bcd8bc02912bc3b98f3&ipo=images', 1);

INSERT INTO recipe_has_ingredient (recipe_id, ingredient_id, quantity, units)
VALUES (currval('recipe_id_seq'), 663, 50, 'gr'),
       (currval('recipe_id_seq'), 547, 2, 'cuillères à soupe');

COMMIT;
