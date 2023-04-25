# voir avec l'équipe sur la base de donnée

table Recipe

Voici les commandes dont je parlais pour rapatrier le repo de votre Apo sur votre repo perso !
cloner le repo original : git clone git@github.com/O-clock-Maya/NomDuRepo (on peut aussi le faire en changeant le nom du repo : git clone git@github.com/O-clock-Maya/NomDuRepo new-repo-name)
récuperer toutes les branches en local : for BRANCH in $(git branch -a | grep remotes | grep -v HEAD | grep -v master); do git branch --track "${BRANCH#remotes/origin/}" "${BRANCH}"; done
 à faire uniquement si le repo contient des fichiers peda :
supprimer les fichiers O'clock : for BRANCH in $(git branch); do git checkout ${BRANCH} && git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch README.md'; done
la commande ci-dessus supprimera les fichiers O'clock dans toutes les branches
maintenant, aller sur votre github perso et créer un nouveau repo (par exemple : new-repo-name)
récupérer l'url ssh : git@github.com/VotreUsernameGH/new-repo-name.git
vérifier la remote actuelle : git remote (la remote par defaut devrait être origin. Si ce n'est pas le cas, adapte la commande suivante.)
supprimer la remote actuelle : git remote remove origin
ajouter la nouvelle remote : git remote add origin git@github.com/VotreUsernameGH/new-repo-name.git
il ne reste plus qu'à push : git push --all (--all est l'option pour push toutes les branches sur le nouveau repo)
et puis... C'est tout :fusée:

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
