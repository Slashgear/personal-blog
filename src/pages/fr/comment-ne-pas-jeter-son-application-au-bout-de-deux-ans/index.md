---
title: 'Comment ne pas jeter son application au bout de deux ans ?'
description: Retour d'expérience basés sur les bonnes pratiques appliquées à la plateforme web développée chez Bedrock Streaming.
date: 2021-08-05
hero: ./bedrock.jpg
language: fr
tags:
  - web
  - javascript
  - bedrock
---

_Retour d'expérience basés sur les bonnes pratiques appliquées à la plateforme web développée chez [Bedrock Streaming](https://www.bedrockstreaming.com/)_

## Un peu de contexte

- Ressenti sur la durée de vie des projet, notamment les projet front
- La communication et la perte de connaissance du projet
- Beaucoup de personnes sur un même projet
- Des technos qui évoluent, se dépréssient, des nouveaux outils

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

- sans même toucher à votre projet, il périme de lui même avec ses dépendances
- il faut mieux parfois éviter de dependre de lib non maintenues
- les libs de composants graphique peuvent vous aider au début, mais elle créeent des interdépendances
- yarn audit task
- yarn outdated et dependabot

## Accepter son "Legacy"

- Le code devient dans tous les cas du legacy.
- Tant que les fonctionnalités sont testées, rien ne vous oblige à tout refactorer en permanence pour que toute votre codebase soit staet of art.
- On se focus sur nos pain point

---

Les bonnes pratiques présentées ici restent bien évidemment subjectives et ne s'appliqueront pas parfaitement/directement dans vos contextes.
Je suis cependant convaincu qu'elle peuvent probablement vous aider à identifier ce qui peut faire passer votre projet de fun à périmé.
A Bedrock nous avons mis en place d'autres pratiques que je n'ai pas listé ici mais ce sera l'occasion de faire un nouvel article un jour.
