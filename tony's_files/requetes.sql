--voici une liste de requetes peut etre utile (just in case)



--acceder a la view avec la note moyenne et le name de toutes les recettes
SELECT "recipe_id", "name", AVG("rate") AS "avg_rate"
FROM "recipe_details"
GROUP BY "recipe_id", "name"
HAVING AVG("rate") > 1;



--acceder a la view avec la note moyenne d'une recette via son id
SELECT AVG("rate") AS "avg_rate"
FROM "recipe_details"
WHERE "recipe_id" = 4
GROUP BY "recipe_id"