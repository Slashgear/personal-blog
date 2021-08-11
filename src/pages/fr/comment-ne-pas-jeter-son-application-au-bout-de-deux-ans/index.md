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

![impression d'écran du nombre de commit sur master de notre projet 15668](./commit-count.png)

Vous pourriez vous dire: _"Oh les pauvres maintenir une application vieille de presque 10 ans ça doit être un enfer !"_

Rassurez-vous, ce n'est pas le cas !
J'ai par le passé travaillé sur des projets frontend bien moins vieux mais sur lesquelles le développement de nouvelles fonctionnalités était bien plus pénible.

Aujourd'hui le projet reste à jour techniquement, on doit être sur la dernière version de React alors que celui-ci avait commencé sur une version _0.x.x_.
Dans ce monde des technologies web souvent décrié (ex: les nombreux sur la _Javascript Fatigue_) dont les outils et les pratiques évoluent constamment, conserver un projet "à jour" reste un vrai challenge.

![nombre de version de l'application 1445](./releases.png)

De plus, dans le contexte de ce projet spécifique, en presque 10 ans, nous avons connu une centaine de contributeurs différents.
Certains contributeurs ne sont restés que quelques mois/années, comment ne pas perdre des infos ?
Comment fait-on pour garder au maximum la connaissance sur "Comment on fait les choses et comment ça marche ?".

![liste des 100 contributeurs du projet](./contributors.png)

C'est ce que je vous propose de vous présenter dans cet article.
Avec l'aide de mes collègues, j'ai rassemblé la liste des bonnes pratiques qui nous permettent encore aujourd'hui de maintenir ce projet en état.
Avec [Florent Dubost](https://twitter.com/fooragnak), on s'est souvent dit qu'il serait intéressant de les lister.
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
> [_Olivier Mansour (deputy CTO à Bedrock)_](https://twitter.com/omansour)

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

### La liste _presque_ exhaustive 🤞

<details>
<summary style='font-weight: bold; font-style: italic'>Étant donné que cet article est déjà suffisamment long, voici la liste des règles qu'on s'impose sur le projet et qui pourraient vous servir d'exemple (clique sur ce texte pour les faires apparaitre)</summary>

![Notre workflow d'intégration continue](./ci-workflow.png)

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
- On vérifie quelques règles sur le CSS avec [Stylelint](https://stylelint.io/) et [bemlinter](https://github.com/M6Web/bemlinter) (on utilise plus BEM aujourd'hui mais il reste encore un peu de style géré en SCSS qu'on migre petit à petit)
- Le projet est un monorepo sur lequel nous essayons de maintenir les mêmes version de dépendances pour chaque package.
  Pour cela nous avons développé un outil qui permet de faire cette vérification _[monorepo-dependencies-check](https://www.npmjs.com/package/monorepo-dependencies-check)_
- On vérifie que le notre fichier `yarn.lock` n'a pas été modifié par inadvertance ou bien qu'il a été bien mis à jour par rapport aux modifications du `package.json`.
- Terraform est utilisé pour la gestion de nos ressources cloud, nous vérifions que le format des fichiers est correct.
- Durant les tests e2e nous vérifions qu'aucune requête d'image n'a généré une 404.
- On réalise quelques [vérifications d'accessibilité avec Axe](https://www.deque.com/axe/) durant nos tests e2e.

</details>

## Tester, tester et tester

J'espère qu'en 2021 il n'est plus nécessaire d'expliquer pourquoi tester automatiquement son application est indispensable pour la rendre pérenne.
En JS on est plutôt bien équipé pour tester aujourd'hui.
Il reste cependant l'éternelle question:

> "Qu'est-ce qu'on veut tester ?"

Globalement si on recherche sur internet cette question, on voit que des besoins différents font émerger des pratiques et des outils de testing bien différents.
Ce serait très présomptueux de penser qu'il y a une bonne manière de tester automatiquement son application.
C'est pourquoi il est préférable de définir une ou plusieurs stratégies de test qui répondent à nos besoins.

Nos stratégies de tests reposent sur deux volontés bien distinctes:

- Automatiser la vérification des fonctionnalités proposées aux utilisateurs de la manière la plus fidèle à ce qu'il peut se passer en production
- Nous fournir des solutions efficace pour specifier la manière dont nous implémentons nos solutions techniques pour nous permettre de les faire évoluer plus facilement.

Pour cela, nous réalisons deux "types de tests" que je propose de vous présenter ici.

### Nos tests E2E

On les appelle "tests fonctionels", ce sont des tests End-to-end (E2E) sur une stack technique très efficace composée de [CucumberJS](https://cucumber.io/docs/installation/javascript/), [WebdriverIO](https://webdriver.io/) avec [ChromeHeadless](https://developers.google.com/web/updates/2017/04/headless-chrome)
Il s'agit d'une stack technique mise en place au début du projet (à l'époque avec [PhantomJS](https://phantomjs.org/) pour les plus anciens d'entre-vous)

Cette stack nous permet d'automatiser le pilotage de tests qui contrôlent un navigateur.
Ce navigateur va réaliser des actions qui se rapprochent le plus de celles que nos vrais utilisateurs peuvent réaliser tout en vérifiant comment le site réagit.

Il y a quelques années, cette stack technique était plutôt compliquée à mettre en place, mais aujourd'hui il est plutôt simple de le faire.
[Le site qui héberge cet article de blog](https://github.com/Slashgear/slashgear.github.io) en est lui-même la preuve.
Il ne m'a fallu qu'une dizaine de minutes pour mettre en place cette stack avec [le WebdriverIo CLI](https://webdriver.io/docs/gettingstarted) pour vérifier que mon blog fonctionne comme prévu.

Voici donc un exemple de fichier de test E2E pour vous donner une idée:

```gherkin
Feature: Playground

  Background: Playground context
    Given I use "playground" test context

  Scenario: Check if playground is reachable
    When As user "cytron@m6.fr" I visit the "playground" page
    And I click on "playground trigger"
    Then I should see a "visible playground"
    And I should see 4 "playground tab" in "playground"

    When I sleep 1 seconds to wait for full playground load
    And I click on "playground trigger"
    Then I should not see a "visible playground"

    # ...
```

Et ça donne ça en local !

<video controls style="width: 100%">
  <source src="https://user-images.githubusercontent.com/6263857/129066094-604693a8-8e05-4908-beff-94f2e936f07d.mp4" type="video/mp4">
</video>

Voilà un petit schéma qui explique un peu comment cette stack fonctionne:

![schéma qui explique le fonctionnement de notre stack](./e2e-archi.png)

Aujourd'hui, l'application web de Bedrock possède plus de 800 scénarios de tests E2E qui tournent sur chacune de nos _Pull Request_ et sur la branche `master`.
Ils nous assurent que nous n'introduisons pas de régression fonctionnelle et c'est juste génial !

👍 Les points positifs

- WebdriverIO nous permet également de lancer de manière journalière ces mêmes tests sur des vrais device en passant par le service [Browserstack](https://www.browserstack.com/).
  On a donc tous les jours un job qui s'assure que notre site fonctionne correctement sur un Chrome dernière version sur Windows 10 et Safari Macos.
- Ces tests nous permettent de facilement documenter les fonctionnalités de l'application.
- Ils nous permettent de reproduire des cas qui sont loin d'être nominaux.
  Dans une logique TDD, ils permettent d'avancer sur le développement sans avoir à cliquer pendant des heures.
- Ces tests nous ont permis de ne pas casser l'ancienne version du site qui est toujours en production pour quelques clients alors que nos efforts se concentrent sur la nouvelle.
- Ils nous apportent une vraie confiance
- Grâce notre libraire [_superagent-mock_](https://www.npmjs.com/package/superagent-mock), nous pouvons _fixturer_ (bouchonner, mocker) toutes les API dont on dépend et ainsi même vérifier les cas d'erreurs.
  De plus, mocker la couche XHR du navigateur permet une amélioration siginificative du temps d'exécution des tests. 🚀
- Ils nous donne accès à des usages étendus comme :
  - vérification de règles d'accessibilité
  - check les logs de la console navigateur (pour ne pas introduire d'erreur ou de React Warning par exemple)
  - surveiller tous les appels réseaux du site grâce à un proxy
  - et j'en passe...

👎 Les complications

- Maintenir cette stack est compliqué et coûteux.
  Étant donné que peu de ressources sont publiées sur ce domaine, on se retrouve parfois à devoir creuser pendant plusieurs jours pour les réparer 😅.
  Il nous arrive de nous sentir parfois bien seul à avoir ces soucis.
- Il est très facile de coder un test E2E dit _flaky_ (ie: un test qui peut échouer aléatoirement), ils font perdre du temps.
  Ils nous font croire que quelque chose est cassé.
  Ils nous prennent parfois du temps à les stabiliser.
  Il reste cependant **bien meilleur de ne pas conserver un test qui ne vous donnera pas un résultat stable.**
- Faire tourner tous les tests prend un temps important sur notre intégration continue.
  Il faut régulièrement travailler sur leur optimisation pour que le feedback qu'ils vous apportent soit le plus rapide possible.
  Ces temps importants coutent également de l'argent, il faut en effet bien faire tourner ces tests sur des machines.
  Pour information, l'infrastructure du site web (à lui seul, juste l'hébergement de nos servers Node + fichiers statiques + CDN) coutent bien moins cher que notre intégration continue.
  Cela fait bien évidemment sourire nos Ops ! 😊
- Les nouvelles recrues de nos équipes ont souvent jamais réalisés ce genre de tests, il y a donc une phase ~~de galère~~ d'apprentissage..
- Certaines fonctionnalités sont parfois trop compliquées à tester avec notre stack E2E (par exemple, les parcours de paiement qui dépendent de tiers).
  Il nous arrive alors de nous rabattre sur d'autres techniques avec Jest notamment en ayant un scope moins unitaire.

### Nos tests "unitaires"

- expliquer notre stratégie de test
- montrer le kikimeter de nos tests Jest
- la performance, l'automock
- nos soucis avec React-testing-lib
- la nécessité de faire des tests d'intégration dans certain cas

### Nos principes

Nous essayons de toujours respecter les règles suivantes lors qu'on se pose la question "Dois-je ajouter des tests ?".

1. Si notre _Pull Request_ introduit des nouvelles fonctionnalités utilisateurs, il faut intégrer des scenari de test E2E.
   Des tests unitaires avec Jest peuvent les compléter / remplacer en fonction.
2. Si notre _Pull Request_ a pour but de corriger un bug, cela signifie qu'il nous manque un cas de test.
   On doit donc essayer de rajouter un test E2E ou à défaut un test unitaire.

_C'est en écrivant ces lignes que je me dis que ces principes pourraient très bien faire l'objet d'une automatisation._ 🤣

## Le projet reste, les fonctionnalités non

- expliquer qu'il est préférable de mettre en place du featureflippping plutot que de devoir enlever/remttre le code ou jongler avec les branches
- Cela permet de l'A/B testing
- Cela permet de développer petit à petit des nouvelles fonctionnalités sans les ativer en prod
- Couper une feature qui plante en prod
- Dans le cas d'un multi clients, proposer les feature en mode buffet
- quand une feature marche plus, on la coupe puis on nettoie
- parenthèse sur le futurflipping

## Monitorer, Mesurer, Alerter

- le monitoring et l'alerting est très important pout suivre les fonctionnalité, s'assurer qu'elles marchent en prod et décider si on peut les enlever.
- aucune feature ne marche tant qu'elle n'est pas suivie mesurable
- quand on a des mesures solides, on peut mettre en place de l'alerting
- les mesures peuvent nous permettre de prendre de décisions
- les alertes doivent être actionnable pour ne pas faire du bruit inutile
- de l'importance de la data dans les décisions

## Limiter, surveiller et mettre à jour ses dépendances

- sans même toucher à votre projet, il périme de lui-même avec ses dépendances
- il faut mieux parfois éviter de dependre de lib non maintenues
- les libs de composants graphique peuvent vous aider au début, mais elle créeent des interdépendances
- yarn audit task
- yarn outdated et dependabot

## Accepter sa dette technique

Un projet accumulera toujours de la dette technique.
C'est un fait.
Que ce soit de la dette volontaire ou involontaire, un projet qui résiste aux années va forcément accumuler de la dette.
D'autant plus, si pendant toutes ces années vous continuez d'ajouter des fonctionnalités.

Depuis 2014, nos bonnes pratiques, nos façons de faire ont bien évolué.
Parfois nous avons décidé ces changements mais parfois nous les avons subi (un exemple, l'arrivée des composants fonctionnels avec React et l'api des Hooks).

**Notre projet n'est pas _"state of art"_ et on l'assume.**

<iframe src="https://giphy.com/embed/JGunlb6LbQlz2" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

Nous essayons de prioriser nos sujets de _refactoring_ sur les parties de l'application sur lequel on a le plus de souci, le plus de peine.
On considère qu'une partie de l'application qui nous plaît pas mais sur laquelle on n'a pas besoin de travailler (apporter des évolution) ne mérite pas qu'on la refactor.

Je pourrais vous citer de nombreuses fonctionnalités de notre application qui n'ont pas évolué fonctionnellement depuis plusieurs années.
Mais comme nous avons couvert ces fonctionnalités de tests E2E depuis le début, nous n'avons pas vraiment eu à y retoucher.

Avec notre architecture de _feature flipping_, la prochaine évolution d'un bon de code est parfois sa désactivation.
Alors pourquoi passez son temps à ré-écrire toute l'application ?

- Le code devient dans tous les cas du legacy.
- Tant que les fonctionnalités sont testées, rien ne vous oblige à tout refactorer en permanence pour que toute votre codebase soit staet of art.
- On se focus sur nos pain point

## Pour résumer

Les bonnes pratiques présentées ici restent bien évidemment subjectives et ne s'appliqueront pas parfaitement/directement dans vos contextes.
Je suis cependant convaincu qu'elles peuvent probablement vous aider à identifier ce qui peut faire passer votre projet de fun à périmé.
À Bedrock nous avons mis en place d'autres pratiques que je n'ai pas listées ici mais ce sera l'occasion de faire un nouvel article un jour.
