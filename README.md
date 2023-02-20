# Bonjour a tous

voici le guide d'utilisation git pour ce projet d'apotheose

## voici les commandes classiques

pour un commit

```bash
git add .
git commit -m" [le type de modification] : votre message pour decrire les modif que vous avez apportez"
git push
```

exemple

- `git commit -m" ⚙ feat: add new routes for the API "`
- `git commit -m" 🔧 fix: fix the datamaper request"`
-

ou alors sans le git add .

```bash
git commit -a -m"[le type de modification] : votre message pour decrire les modif que vous avez apportez"
git push
```

pour afficher les precedent commit

- `git reflog`

ou bien , plus en detail

- `git log`

# les commits

📝 Les commits s'ecrive en ANGLAIS 🇬🇧.
[git convention](https://www.conventionalcommits.org/en/v1.0.0/)/ [video](https://www.youtube.com/watch?v=AlHohDBBAMY&ab_channel=Grafikart.fr)

<type>

- 🧱 build: Système de build (example : gulp, webpack, npm)
- ci: Intégration continue (example scopes: Travis, Circle, BrowserStack,
SauceLabs)
- 📚 docs: Documentation
- ⚙ feat: Ajout d'une fonctionnalité
- 🔧 fix: Correction de bug
- 🏎 perf: Amélioration des performances
- ➕ refactor: Changement du code qui ne change rien au fonctionnement
- 🖌️ style: Changement du style du code (sans changer la logique)
- 🔌 test: Modification des tests

en anglais
---

- 🔧 fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
- ⚙ feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
- BREAKING CHANGE: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.
- types other than fix: and feat: are allowed, for example @commitlint/config-conventional (based on the Angular convention) recommends build:, chore:, ci:, docs:, style:, refactor:, perf:, test:, and others.
- footers other than BREAKING CHANGE: <description> may be provided and follow a convention similar to git trailer format.

## avant de commencer la journée de code

<mark style="background-color: #F0F">toujours</mark> faire un git pull pour recuperer les dernieres mises a jour de la branche main

```bash
git pull
```

## les branches

avant de commencer une fonction , toujours creer une branche dedié puis en refaire une avec votre nom

```bash
git checkout -b[nom de votre branche]
ou
git branch [nomDeLaBranche]
puis
git checkout [nomDeLaBranche]
```

exemple

- `git checkout -b odeliceErrorController`

puis de cette branche

- `git checkout -b Tony_odeliceErrorController`

pour afficher les branches

`git branch`

supprimer une branche(vous devez avoir fusionnez vos dernier commit avant)

- `git branch -d [le nom de votre branche]`

## la merge

pour fusionner votre branche vous devez merge, le plus facile serait de le faire directement sur <mark style="background-color: #F0F">GITHUB</mark>

- cliquez sur `compare & pull resquest`
- ensuite laissez un commentaire a celui qui va valider votre pull request(optionel)
- cliquez sur `Draft pull request` (pour forcer a une review) ou `create pull request`(pour s'en passer)
- cliquez sur `Ready for review` (si draft P.R.)
- cliquez sur `Merge pull request` pour valider la fusion (<mark style="background-color: #F0F">toujours</mark> faire une review pour verifier les conflits)
- cliquez sur `Confirm merge`

[un probleme sur un commit ou une merge ?](https://ohshitgit.com/fr) / [la cheat sheet](https://training.github.com/downloads/fr/github-git-cheat-sheet.pdf) / [la fiche recap kourou](https://kourou.oclock.io/ressources/fiche-recap/git-et-github/)
<details>
<summary>📺 git status</summary>
<br>
Cette commande doit être la commande reflexe. Elle permet de connaitre l'état de votre projet vis à vis de git.
Savoir dans quel état est notre git est très utile. Avec la commande suivante (`git add`), vous verrez que l'on peut ajouter un ou
plusieurs dossiers. Savoir quel fichier ou dossier est en cours de "sauvegarde", quel dossier est suvi, quel dossier a été modifié
peut donc vous sauver en évitant d'oublier d'inclure un fichier dans votre commit et donc dans le push.
</details>
