---
title: 'Esbuild, le bundler incroyablement rapide 💨 et prometteur 📈 !'
description: Jouant avec les bundler traditionnels comme webpack depuis plusieurs années, je vous propose ici mon avis sur le bundler esbuild.
date: 2021-03-14
hero: ./esbuild.png
language: fr
tags:
  - webpack
  - js
  - bundler
---

Cela fait plusieurs années que je joue avec les bundlers JS.
Restant convaincu de la nécessité de l'usage de ces outils (ne me laissez pas croire que vous ne packagez pas vos module JS en prod 😅), j'ai beaucoup joué avec [webpack](/fr/webpack/).
Notamment pour des sujets de performance, d'optimisation et d'usage de plugins custom.

Je pense encore qu'aujourd'hui (2021-03-14), webpack reste la solution la plus industrielle et aboutie pour _bundler_ mes applications web.
J'entends que les outils comme _parcel_ et _rollup_ restent de bonnes alternatives.
Cependant, webpack a probablement la plus grosse communauté et est utilisé par de nombreux projets.

Mais ne nous voilons pas la face, aujourd'hui on se satisfait de ces outils de _bundling_ malgré des performances qui restent assez pauvres.
Je travaille tous les jours sur un projet de plusieurs milliers de "modules" resolus par webpack et c'est parfois une souffrance 🥱.

> Malgrés une utilisation intensive de cache et de workers, webpack montre certaines limitations pour packager des larges applications.

## En quoi esbuild parait intéressant ?

Je ne vois pas de façon plus simple de l'exprimer que de vous expliquer simplement:

> La première fois où j'ai lancé `esbuild` sur mon app web de test, j'ai cru qu'il avait planté alors qu'en fait il s'était exécuté à une vitesse absoluement dingue.
> Pour avoir ce genre de retour aussi rapide, mon cerveau s'est habitué à se dire "Non mais la il y a une erreur" 😅

### Un API pauvre by design

### Des mécaniques de plugins

### Une vision de l'outil par son créateur

### Les features qui m'ont vraiment intéressé

#### Le mode server

#### L'api par flag / JS / Go

## Mais du coup on arrête tout et on part la dessus ?

> Gagnons du temps, la réponse pour moi est clairement non.

Comme le dit le créateur dans la [FAQ de la doc](https://esbuild.github.io/faq/#production-readiness) en toute honnêteté, le projet n'est pas à considérer comme étant en alpha.
Cependant, l'outil en lui-même ne possède pas encore toutes les features qui ferait de lui un bon remplacant des bundler de la génération précédente.
Je pense notamment à l'absence de HMR natif, ou bien encore un code splitting perfectible.

Il faut cependant ne pas rester fermé sur cette question.
Clairement `esbuild` a de très gros points forts qui manquent à l'écosystem actuel.
La communauté, encore naissante, est plutôt active et les échanges dans les Issues et les PR du repo sont hyper intéressants.

Je finirais en vous disant qu' `esbuild` n'est pas la seule alternative qui nous est proposé dans cette nouvelle génération de _bundler_.
Je compte justement faire ce genre d'analyse sur les outils comme Vite ou bien Snowpack.
