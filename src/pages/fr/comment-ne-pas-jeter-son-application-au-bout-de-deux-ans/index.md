---
title: "Bonnes pratiques pour la maintenance d'une application web"
description: "Comment ne pas jeter son projet au bout de 2 ans ? Retour d'expérience basés sur les bonnes pratiques appliquées à la plateforme web développée chez Bedrock Streaming."
date: 2021-08-05
hero: ./bedrock.jpg
language: fr
translations: ['en', 'how-not-to-trash-your-project']
tags:
  - web
  - javascript
  - bedrock
---

> Comment ne pas jeter son application tous les deux ans ?

_Retour d'expérience basés sur les bonnes pratiques appliquées à la plateforme web développée chez [Bedrock Streaming](https://www.bedrockstreaming.com/)_

## Un peu de contexte

À Bedrock Streaming de nombreuses équipes développent et maintiennent différentes applications frontend pour nos clients et utilisateurs.
Certaines de ces applications ne sont pas toute jeune.
En effet, si on prend l'exemple de l'application sur laquelle je travaille principalement, il s'agit d'un site web dont les développements ont commencé en 2014.
J'ai d'ailleurs déjà évoqué celle-ci dans différents articles de ce blog.

Vous pourriez vous dire: _"Oh les pauvres maintenir une application vieille de presque 10 ans ça doit être un enfer !"_

Rassurez-vous, ce n'est pas le cas !
J'ai par le passé travaillé sur des projets frontend bien moins vieux mais sur lesquelles le développement de nouvelles fonctionnalités était bien plus pénible.

Aujourd'hui le projet reste à jour techniquement, on doit être sur la dernière version de React alors que celui-ci avait commencé sur une version _0.x.x_.
Dans ce monde des technologies web souvent décrié (ex: les nombreux sur la _Javascript Fatigue_) dont les outils et les pratiques évoluent constamment, conserver un projet "à jour" reste un vrai challenge.

![screenshot des métadonnées du dépot site-6play-v4]()

De plus, dans le contexte de ce projet spécifique, en presque 10 ans, nous avons connu une centaine de contributeurs différents.
Certains contributeurs ne sont restés que quelques mois/années, comment ne pas perdre des infos ?
Comment fait-on pour garder au maximum la connaissance sur "Comment on fait les choses et comment ça marche ?".

C'est ce que je vous propose de vous présenter dans cet article.
Avec l'aide de mes collègues, j'ai rassemblé la liste des bonnes pratiques qui nous permettent encore aujourd'hui de maintenir ce projet en état.
Avec Florent Dubost, on s'est souvent dit qu'il serait intéressant de les lister.
Ne serait-ce que pour le partager en interne à Bedrock.
Quitte à en faire la liste, autant vous le partager également, en espérant que cela vous soit utile.

## S'imposer des règles et les automatiser

- La doc technique qui dit comment faire c'est bien, les règles de lint c'est mieux
- lister les exemples de règles qu'on s'impose
- l'autofix c'est la vie
- Les règles orales sont à bannir
- compter sur sa CI pour arbitrer
- la review n'est pas suffisante pour tout voir, charge mentale

## Tester, tester et tester

- expliquer notre stratégie de test
- nos soucis avec React-testing-lib
- Les succès de notre stratégie
- une feature => des tests
- un bug => un correctif => un test qui était manquant

## Le projet reste, les fonctionalités non

- expliquer qu'il est préférable de mettre en place du featureflippping plutot que de devoir enlever/remttre le code ou jongler avec les branches
- Cela permet de l'A/B testing
- Cela permet de développer petit à petit des nouvelles fonctionnalités sans les ativer en prod
- Couper une feature qui plante en prod
- Dans le cas d'un multi clients, proposer les feature en mode buffet
- quand une feature marche plus, on la coupe puis on nettoie
- parenthèse sur le futurflipping

## Limiter, surveiller et mettre à jour ses dépendances

- sans même toucher à votre projet, il périme de lui-même avec ses dépendances
- il faut mieux parfois éviter de dependre de lib non maintenues
- les libs de composants graphique peuvent vous aider au début, mais elle créeent des interdépendances
- yarn audit task
- yarn outdated et dependabot

## Accepter sa dette technique

- Le code devient dans tous les cas du legacy.
- Tant que les fonctionnalités sont testées, rien ne vous oblige à tout refactorer en permanence pour que toute votre codebase soit staet of art.
- On se focus sur nos pain point

---

Les bonnes pratiques présentées ici restent bien évidemment subjectives et ne s'appliqueront pas parfaitement/directement dans vos contextes.
Je suis cependant convaincu qu'elles peuvent probablement vous aider à identifier ce qui peut faire passer votre projet de fun à périmé.
A Bedrock nous avons mis en place d'autres pratiques que je n'ai pas listées ici mais ce sera l'occasion de faire un nouvel article un jour.
