## Zut, j'ai fait un truc horrible, par pitié dites-moi que git peut voyager dans le temps !?

```
git reflog

# liste tout ce que vous avez fait dans git,
# quelle que soit la branche !
# chaque entrée correspond à un index HEAD@{index}
# trouvez celui juste avant d'avoir tout cassé

git reset HEAD@{index}

# git est magique
```

## Zut, j'ai commité sur le master alors que ça aurait dû aller sur une nouvelle branche

```
# créer une nouvelle branche à partir du master actuel
git branch un-nom-de-nouvelle-branche
# supprimer le dernier commit du master
git reset HEAD~ --hard
git checkout un-nom-de-nouvelle-branche
# votre commit est désormais dans cette branche :)
```
