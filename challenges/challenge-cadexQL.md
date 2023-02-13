# Cadex + SQL = CadexQL ?

Une des limites actuelles de notre application, c'est que les données qu'on y ajoute ne durent que le temps de l'exécution de l'application : si on la coupe puis on la redémarre, tout est perdu.

Une autre un peu gênante aussi, c'est le fait qu'on n'ait aucun contrôle sur les doublons : un F5 malheureux sur une requête POST et on poste une deuxième fois la ou nos propositions, ce qui déséquilibre forcément les probabilités. Si vous devez choisir un nom parmi 35 propositions, mais que 25 de ces propositions sont en fait identiques, vous allez souvent tomber sur le même nom :grimacing:

## Ne pas réinventer la roue

On pourrait développer les fonctionnalités manquantes : le contrôle des doublons est d'ailleurs assez trivial à mettre en place. Par contre, pour faire persister les propositions d'utilisateurs, il faudrait réécrire le fichier JSON à chaque fois qu'on rajoute une info dedans :thinking: Ça sent bon les bugs et les anguilles sous roche, vous ne trouvez pas ?

Et puis, à bien y réfléchir, on connaît déjà un système de gestion de données qui permet de faire tout ça nativement et bien plus encore : PostgreSQL :tada:

## À vous de jouer

Ok, on passe à une BDD, mais comment on range nos infos ? Est-ce qu'on ne passerait pas par une étape de modélisation pour se rendre compte de ce qu'on manipule comme données et en déduire leur agencement "physique" dans la base de données.

:wrench: Dressez le MCD du projet cadex

## Faire mieux qu'en 1925

Jacques Prévert et les autres, en 1925, n'avaient pas de PC sous la main pour les aider à rendre leur jeu plus interactif ou plus intelligent. Nous, le côté interactif, on l'a déjà pas mal amélioré : notre API distribue des cadavres exquis à la demande et on peut participer, si on le souhaite, à leur construction.

Pour l'intelligence, on est encore au stade 1925 : la conjugaison, les déclinaisons, les petits ajustements, il faut les faire à la main. À l'époque, c'est un peu ce qui faisait le charme du jeu ; aujourd'hui, on a quand même bien envie d'améliorer un peu ça.

Conjuguer des verbes, appliquer des féminins pluriels à des adjectifs et changer un pronom impersonnel pour sa version personnelle, notre cerveau le fait automatiquement. La preuve avec le cadex suivant : _Les Spice Girls | enrhumé depuis 3 semaines | propose un impôt sur | un chat_. C'est déjà drôle et compréhensible, mais _Les Spice Girls`,` enrhumé`es` depuis 3 semaines`,` propose`nt` un impôt sur `les` chat`s`_, c'est encore un cran au dessus.

Imaginez un instant ce qu'il faudrait mettre en place pour qu'une machine fasse ces corrections : détection du genre et du nombre, harmonisation de la ponctuation sur l'adjectif est long, conjugaison du verbe, ajustement du complément en fonction du verbe :boom: Même pour une apothéose, on n'en voudrait pas, d'un sujet pareil.

Alors, pour rendre ce jeu plus intelligent, on va laisser l'humain faire et proposer aux volontaires de soumettre des corrections orthographiques au cadex qu'il vient de piocher. Pas d'inquiétude, on ne va pas le coder, juste le modéliser.

En clair, il s'agit de représenter une combinaison (nom + adjectif + verbe + complément) et de lui associer une correction. De sorte que le prochain qui pioche cette même combinaison récupère directement la version corrigée :heart_eyes:

:wrench: Modifiez le MCD du projet pour inclure cette fonctionnalité

## BONUS 1

Et si on rajoutait un système de notation des corrections ?

Chaque visiteur piochant un cadex corrigé aurait la possibilité de voter `+` ou `-`, comme sur Stackoverflow, et de faire ainsi monter ou baisser la note de la correction, qui démarrerait à 0. Quand une note atteint un seuil de -15, par exemple, l'administrateur pourrait alors décider de la supprimer.

_Modifiez une dernière fois le MCD du projet pour inclure cette fonctionnalité_

## BONUS 2

Maintenant que la concéption est terminé, on mettrais pas les mains dans le cambouis ?

:wrench: Faire le DDL et ajouter du seeding en DML.

Hein quoi ?? … GIY ! :D

## Quoi vous en voulez encore ?

Bon ok… Connectez l'application Cadex à sa nouvelle BDD :tada:

C'est parti pour un Data Mapper (ou un Active Record, je ferai pas ma mijaurée, mais c'est plus long).

:wrench:

1. Créer le connecteur à la BDD
2. Créer le/les Data Mapper pour récupérer les noms, les adjectifs, les verbes, les compléments et enfin les corrections
