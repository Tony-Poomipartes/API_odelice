# Bonjour a tous

voici le guide d'utilisation git pour ce projet d'apotheose

## voici les commandes classiques

pour un commit

```
git add .
git commit -m" [le type de modification] : votre message pour decrire les modif que vous avez apportez"
git push
```

exemple

- `git commit -m" ⚙ feat: add new routes for the API "`
- `git commit -m" 🔧 fix: fix the datamaper request"`
-

ou alors sans le git add .

```
git commit -a -m"[le type de modification] : votre message pour decrire les modif que vous avez apportez"
git push
```

[git convention](https://www.conventionalcommits.org/en/v1.0.0/)
---

- fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
- feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
- BREAKING CHANGE: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.
- types other than fix: and feat: are allowed, for example @commitlint/config-conventional (based on the Angular convention) recommends build:, chore:, ci:, docs:, style:, refactor:, perf:, test:, and others.
- footers other than BREAKING CHANGE: <description> may be provided and follow a convention similar to git trailer format.

## avant de commencer la journée de code

toujours faire un git pull pour recuperer les dernieres mises a jour de vos branches

```
git pull
```

## les branches

avant de commencer une fonction , toujours creer une branche dedié

```
git checkout -b[nom de votre branche]
```

exemple

- `git checkout -b odeliceErrorController`
