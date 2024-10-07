---
title: Git - Pourquoi ne pas garder une branche master local à jour?
description: Qu'est-ce qu'une branche locale, qu'est-ce qu'une branche éloignée ? Pourquoi la mise à jour de la branche locale est-elle une perte de temps ?
ogImage: ../git-tip-why-you-should-not-keep-a-local-master-branch/what.jpg
language: fr
translations: ["en", "git-tip-why-you-should-not-keep-a-local-master-branch"]
pubDatetime: 2019-07-25
tags:
  - git
---

En travaillant avec `git`, j'ai souvent fait l'erreur de maintenir une branche `master` à jour localement en utilisant ces commandes.

```shell script
git checkout master

git pull origin master
```

Je l'ai fait tant de fois.
Cela me permettait de commencer un nouveau développement en étant à jour avec les changements récents.

En fait, il n'est pas nécessaire de conserver des copies locales des branches sur lesquelles nous ne travaillons pas directement.
Nous avons déjà accès à une version locale intacte des branches distantes.

Tout ce temps, j'aurais pu le faire comme cela :

```shell script
git checkout origin/master
```

Et quand vous voulez travailler sur de nouvelles choses, utilisez simplement

```shell script
git checkout -b my-feature origin/master
```

Gardez à l'esprit que ceci est valable pour _master_ ainsi que pour toutes les autres branches sur lesquelles vous ne travaillez pas directement/sur lesquelles vous allez _commit_.

Vous pouvez également suivre les conseils de mon collègue.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">In the same context you can add &quot;never rebase on your local master if you have one&quot; 😉 Personally I have a git rem alias that does &quot;git rebase origin/master&quot;, so easy to write 👌</p>&mdash; Florent Lepretre (@SuperFlaw) <a href="https://twitter.com/SuperFlaw/status/1154079231195959298?ref_src=twsrc%5Etfw">July 24, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">In general you should keep a minimum of local branches, when you&#39;ve pushed them you have their remote image in your local repository. They won&#39;t disappear unless you prune them. Just get used to read what &#39;git fetch&#39; prints, everything is there !</p>&mdash; Florent Lepretre (@SuperFlaw) <a href="https://twitter.com/SuperFlaw/status/1154080561423691776?ref_src=twsrc%5Etfw">July 24, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Faites-moi savoir si vous avez d'autres astuces avec Git !
