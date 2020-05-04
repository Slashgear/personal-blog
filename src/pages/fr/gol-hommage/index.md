---
title: Hommage personnel au "Game of Life" (Jeu de la vie)
description: Essai d'implémentation du Jeu de la Vie en Javascript dans le navigateur et sans framework.
date: 2020-04-20
hero: ../../gol-tribute/gol.jpg
language: fr
translations: ['en', 'gol-tribute']
---

Cette fin d'année scolaire en tant que professeur à la fac n'est pas très habituelle.
D'ici quelques jours, je m'apprête à donner mes premiers cours à des étudiants à distance par Discord.

Je ne sais pas encore en détails comment cela va se dérouler.
Mais j'ai quand même essayé d'adapter mes cours sur les "Design Patterns" pour qu'ils soient plus faciles et moins long que les années précédentes.
En effet, j'imagine déjà qu'il sera compliqué d'aller au même rythme.

Il m'a fallu refaire un TP sur le _très classique_ pattern MVC.
Je dois vous avouer que je manquais cruellement d'idée.
D'abord, je n'avais pas envie de faire une interface graphique avec _JavaFx_ (Java étant le langage le mieux connu de mes étudiants).
Ensuite, je voulais utiliser mon langage de programmation, le JS.

J'espère qu'au moment où vous lisez cet article, la crise du COVID-19 qui a frappé le monde entier dès le début de l'année 2020 est terminée.
À ce jour, on est encore en plein dedans.
J'ai même lu récemment que [Jon H. Conway], le créateur du fameux ["Game of Life"] est décédé de cette maladie.

![animation by xkcd](https://imgs.xkcd.com/comics/rip_john_conway.gif)

> "La voilà mon idée !"

Il ne m'a pas fallu longtemps pour mettre en place un petit _jeu de la vie_ en JS et sans framework.
Le concept est très simple.
Avec l'API des _canvas_, en quelques minutes j'ai pu recréer ce jeu si connu.

Voici donc la démo que je comptais partager à mes étudiants en tant qu'exemple:

<iframe src="https://game-of-life-demo.now.sh/" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0"></iframe>

Lien de la démo: https://game-of-life-demo.now.sh/

Ne me restait plus qu'à le mettre sous la forme d'un TP pour qu'ils puissent le faire eux-même.
Comme tous mes cours sont libres, le voici [disponible sur Github](https://github.com/PolytechLyon/isi3-mvc-gol)

Je ne sais pas du tout si [Jon H. Conway] se doutait (au moment où il a conçu ce jeu) que celui-ci deviendrait à ce point une _"référence"_ dans le monde de l'informatique.
En le faisant découvrir à mes étudiants, j'espère qu'il le restera.

N'hésitez pas à me partager vos implémentations du ["Game of Life"] dans d'autres langages où sur d'autres plateformes.

[jon h. conway]: https://wikipedia.org/wiki/John_Horton_Conway
["game of life"]: https://wikipedia.org/wiki/Jeu_de_la_vie
