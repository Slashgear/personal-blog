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

Un projet qui résiste c'est tout d'abord un ensemble de connaissances qu'on empile les unes sur les autres.
C'est en quelque sorte la tour de Kapla que vous assembliez petit en essayant d'aller le plus haut possible.
On essaye alors de construire des bases solides dès le début sinon on est certain qu'on ira pas très haut.

Dès le début d'un projet on est donc amené à prendre de décisions importantes sur "Comment on souhaite faire les choses ?".
On pense par exemple à "Quel format pour nos fichiers ? Comment on nomme telle ou telle chose ?"
Écrire une documentation précise de "Comment on fait les choses" pourrait paraitre une bonne idée.

Cependant la documentation c'est cool, mais ça a tendance à périmer très vite.
Nos décisions évoluent mais pas la documentation.

> "Les temps changent mais pas les README."
>
> _Olivier Mansour (deputy CTO à Bedrock)_

On trouve qu'automatiser la vérification de chacune des règles qu'on s'impose sur notre codebase ou nos process est bien plus pérenne.
En plus de ça, coté JS on est vraiment bien équipé avec des outils comme Eslint qui nous permettent d'implémenter nos propres règles.

Le réflexe qu'on essaie donc d'adopter est donc le suivant:

- "On devrait essayer de faire comme cela à présent !"
- "Ok c'est intéressant, mais comment peut-on s'assurer qu'on le fasse comme cela automatiquement avec notre CI ?"

Il n'y a rien de mieux que l'intégration continue d'un projet pour ne rien louper sur chacune des _Pull Request_ qu'on est amené à proposer.
Les reviews n'en sont que plus simple car vous n'avez plus à vous soucier de l'ensemble des règles qui sont déjà automatisées.
Dans ce modèle, la review sert donc plus au partage de connaissance qu'au flicage de typo et autre non respect des conventions du projet.

Dans ce principe, il faut donc essayer de bannir les règles orales.
Le temps des druides est terminé, si il faut transmettre oralement toutes les bonnes pratiques d'un projet, l'accompagnement de nouveaux développeurs dans votre équipe n'en sera que plus long.

![la recette de la potion magique de panoramix est perdue car secrète](./panoramix.gif)

Étant donné qu'un projet n'est pas quelque chose de figé, ces règles vont évoluer avec le temps.
On préfèrera alors l'ajout de règles qui possèdent un script qui _autofixera_ toute la codebase intelligemment.
De nombreuses règles Eslint le propose, et cela est vraiment un critère de sélection très important dans nos choix de nouvelles conventions.
Un règle très stricte qui vous obligera à modifier votre code manuellement avant chaque push est pénible à la longue et énervera vos équipes.
Alors qu'une règle (même très stricte) qui peut s'autofixer automatiquement au moment du commit ne sera pas perçu comme gênante.

**Comment décider d'ajouter de nouvelles règles ?**

Cette question peut paraitre épineuse, prenons par exemple le cas des `<tab>` / `<space>` dans les fichiers.
Pour cela, on essaye d'éviter des débats sempiternel et on se plie à la tendance et aux règles de la communauté.
Par exemple, notre base de configuration Eslint est basée sur celle d'Airbnb qui semble avoir un certain succès dans la communauté JS.

<details>
<summary style='font-weight: bold; font-style: italic'>Étant donné que cet article est déjà suffisamment long, voici la liste des règles qu'on s'impose sur le projet et qui pourraient vous servir d'exemple (clique sur ce texte pour les faires apparaitre)</summary>

// TODO insérer un screenshot du workflow de notre CI.

- Le format des fichiers est suivi géré par editorconfig, prettier et eslint.
  Nous avons opensourcé [notre propre configuration](https://github.com/M6Web/eslint-tools), si jamais celle-ci peut vous être utile.
- On utilise un [nommage de commit bien spécifique](https://www.conventionalcommits.org/en/v1.0.0/) pour générer nos changelog.
  Pour s'assurer que les devs le respectent, une simple étape de notre CI le vérifie.
- On ne souhaite pas qu'un dev fasse grossir énormément nos bundle en production, c'est pourquoi nous suivont et mesuront leur taille dans la CI.
- La couverture de tests n'est pas un indicateur pour nous, toutes les lignes n'ont pas la même nécessité pour nous d'être testée.
- Nos tests unitaires tournent bien évidemment sur la CI, ceux-ci doivent passer.
- Nos tests fonctionnels (E2E) tournent sur Chrome Headless, ils doivent être au vert.
- Les logs de nos tests fonctionnels sont récupérés est parsés afin d'éviter l'introduction d'erreur ou de react warning (Le script de parsing est cependant compliqué à maintenir)
- Les tests fonctionnels fonctionnent dans une sandbox ou tout le réseau est proxyfié.
  Nous surveillons que nos tests ne dépendent pas d'une API non moquée qui pourrait ralentir leur execution.

// TODO ajouter tout ce qu'il manque

</details>

## Tester, tester et tester

- expliquer notre stratégie de test
- montrer le kikimeter de nos tests Jest et E2E
- nos soucis avec React-testing-lib
- tester dans des vrais navigateur (Browserstack)
- Les succès de notre stratégie
- une feature => des tests
- un bug => un correctif => un test qui était manquant

## Le projet reste, les fonctionnalités non

- expliquer qu'il est préférable de mettre en place du featureflippping plutot que de devoir enlever/remttre le code ou jongler avec les branches
- Cela permet de l'A/B testing
- Cela permet de développer petit à petit des nouvelles fonctionnalités sans les ativer en prod
- Couper une feature qui plante en prod
- Dans le cas d'un multi clients, proposer les feature en mode buffet
- quand une feature marche plus, on la coupe puis on nettoie
- parenthèse sur le futurflipping
- le monitoring et l'alerting est très important pout suivre les fonctionnalité, s'assurer qu'elles marchent en prod et décider si on peut les enlever.

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
