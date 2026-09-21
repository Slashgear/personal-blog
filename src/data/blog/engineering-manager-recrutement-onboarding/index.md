---
title: "Engineering manager : le recrutement et l'onboarding"
description: |
  Cinquième article de la série sur mon retour d'expérience en tant
  qu'engineering manager. Ce billet porte sur le recrutement et l'onboarding :
  construire une matrice d'évaluation objective dès l'entretien, l'utiliser
  pendant la période d'essai, et rendre une nouvelle personne autonome dès le
  premier jour.
pubDatetime: 2026-09-24
language: fr
ogImage: "./cover.webp"
tags:
  - engineering-management
---

C'est le cinquième article de ma série sur ce que le rôle d'engineering
manager m'a appris. Comme pour les épisodes précédents, ce qui suit n'est ni
une méthode ni une vérité générale : c'est un retour d'expérience personnel,
structuré autour des citations et des principes que des personnes qui ont
compté dans mon parcours m'ont transmis, et de ce qu'ils m'apportent au
quotidien.

Les épisodes précédents portaient sur [le rôle et la posture
d'engineering manager](/posts/engineering-manager-role-et-posture), [le 1:1
et le suivi individuel](/posts/engineering-manager-1-1-et-suivi-individuel),
[donner des objectifs et de la
vision](/posts/engineering-manager-objectifs-et-vision), et [les métriques
que je surveille](/posts/engineering-manager-metriques). Vous pouvez retrouver
tous les articles de la série sur la page du tag
[engineering-management](/tags/engineering-management).

Ce billet-ci se concentre sur le recrutement et l'onboarding : comment faire
des choix d'équipe aussi objectifs que possible, comment évaluer sereinement
la période d'essai, et comment faire en sorte qu'une personne qui rejoint
l'équipe soit autonome et contribue vite, sans y passer des semaines.

## « Est-ce que je me vois travailler avec cette personne ? »

> « La seule question à laquelle on essaie de répondre en entretien, c'est
> "est-ce que je me vois travailler avec cette personne ?" » ([Nicolas
> Cuillery](https://www.linkedin.com/in/nicolas-cuillery/), un ancien
> collègue)

J'ai longtemps cru que recruter, c'était surtout vérifier des compétences
techniques. Avec l'expérience, j'ai compris que la question qui traverse
vraiment tout l'entretien est plus simple, et plus humaine : est-ce que je
me vois travailler avec cette personne, jour après jour ?

Cette question n'évacue pas la technique : elle la remet à sa place. On ne
recrute pas un CV, on recrute quelqu'un qui va passer la majorité de son
temps éveillé avec son équipe. Et c'est une décision collective : chacun,
dans l'équipe, a son propre capteur de cette question, et c'est leur somme
qui fait le bon choix.

C'est aussi un écho à toute la série. L'[effet
miroir](/posts/engineering-manager-role-et-posture) dont je parlais au premier
épisode vaut pour le recrutement : la personne que vous choisissez va diffuser
son énergie dans l'équipe pendant des années. Et le _top 3_ des [valeurs et
préférences](/posts/engineering-manager-1-1-et-suivi-individuel) (ce qui
compte pour chacun, ce qu'il aime ou déteste faire) devient un excellent
outil pour évaluer, en entretien, l'adéquation d'une personne à la façon dont
l'équipe fonctionne réellement, pas à la façon dont on aimerait qu'elle
fonctionne.

## De la fiche de poste à la matrice d'évaluation

> « À partir de l'entretien, il est bon de se poser un moment pour établir
> une liste de compétences qu'on souhaite évaluer sur la personne qui rejoint
> son équipe. » (moi, en résumant ce que je mets en place)

« Est-ce que je me vois travailler avec cette personne ? » est une question
essentielle, mais elle a un défaut : elle est terriblement subjective. Or,
plus on recrute, plus on mesure à quel point notre ressenti du moment est
biaisé : par l'échange agréable, par la fluidité de la conversation, par la
fatigue de la journée. Le contrepoison, c'est de se doter d'une grille
objective.

Mon réflexe est simple : à partir de la **fiche de poste**, je dérive la
liste des **compétences et des skills** que j'attends réellement de la
personne. Pour chacune, je définis une pondération, son poids relatif dans
le rôle. Pendant l'entretien, ou juste après, je note chaque candidat sur ces
compétences.

Concrètement, ça donne une **matrice d'évaluation** avec trois colonnes qui
suffisent : la **compétence**, sa **note /100**, et sa **pondération**. La
note finale se calcule en sommant, pour chaque compétence, le produit de la
note par la pondération.

<figure>
  <svg
    viewBox="0 0 520 260"
    role="img"
    aria-label="Schéma de la matrice d'évaluation : des compétences dérivées de la fiche de poste, chacune avec une note sur cent et une pondération, qui se combinent en une note finale"
    style="width: 100%; max-width: 560px; height: auto; margin: 0 auto; display: block;"
  >
    <title>De la fiche de poste à la note finale</title>
    <rect x="30" y="20" width="200" height="46" rx="6" fill="none" stroke="rgb(var(--color-border))" stroke-width="1" />
    <text x="130" y="48" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="12" font-weight="600">Fiche de poste</text>
    <path d="M230 43 L270 43" stroke="rgb(var(--color-accent))" stroke-width="2" />
    <g font-size="11">
      <rect x="275" y="16" width="215" height="24" rx="4" fill="rgb(var(--color-accent))" fill-opacity="0.85" />
      <text x="382" y="32" text-anchor="middle" fill="rgb(var(--color-fill))" font-weight="600">Compétence · note /100 · pondération</text>
      <rect x="275" y="46" width="215" height="24" rx="4" fill="rgb(var(--color-accent))" fill-opacity="0.7" />
      <text x="382" y="62" text-anchor="middle" fill="rgb(var(--color-fill))">Compétence · note /100 · pondération</text>
      <rect x="275" y="76" width="215" height="24" rx="4" fill="rgb(var(--color-accent))" fill-opacity="0.45" />
      <text x="382" y="92" text-anchor="middle" fill="rgb(var(--color-fill))">Compétence · note /100 · pondération</text>
    </g>
    <path d="M382 100 L382 140" stroke="rgb(var(--color-border))" stroke-width="2" stroke-dasharray="4 4" />
    <rect x="282" y="140" width="200" height="46" rx="6" fill="none" stroke="rgb(var(--color-accent))" stroke-width="2" />
    <text x="382" y="168" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="12" font-weight="600">Note finale = Σ note × pondération</text>
    <text x="382" y="212" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="11" opacity="0.7">Comparaison objective des candidats</text>
  </svg>
  <figcaption style="text-align: center; font-size: 0.875rem; margin-top: 0.5rem;">
    La fiche de poste dérive la liste des compétences ; la pondération les
    hiérarchise ; la note finale permet de comparer les candidats sur des
    bases communes.
  </figcaption>
</figure>

L'intérêt, ce n'est pas de donner l'illusion d'une science exacte. C'est
d'avoir un **support commun** pour comparer les candidats, et de forcer la
discussion d'équipe à porter sur des critères explicites plutôt que sur une
impression diffuse. C'est la différence entre « j'ai bien aimé cet échange »
et « sur l'accessibilité, il a montré un vrai niveau, et c'est pondéré à 15 %
dans notre rôle ».

## Un exemple : une grille pour un développeur front

Prenons un cas concret : recruter un développeur ou une développeuse front.
À partir de la fiche de poste, je dérive six compétences, chacune avec sa
pondération. Voici une fausse grille, avec trois candidats notés sur 100 :

| Compétence           | Pondération | Candidat A | Candidat B | Candidat C |
| -------------------- | ----------- | ---------- | ---------- | ---------- |
| React / TypeScript   | 30 %        | 85         | 60         | 95         |
| Accessibilité (a11y) | 15 %        | 90         | 70         | 80         |
| CSS / responsive     | 15 %        | 75         | 85         | 70         |
| Tests                | 15 %        | 80         | 90         | 75         |
| Collaboration        | 15 %        | 95         | 80         | 60         |
| Tooling / CI         | 10 %        | 70         | 75         | 90         |

La note finale de chaque candidat est la somme, compétence par compétence, de
la note multipliée par la pondération :

- **Candidat A :** 85 × 0,30 + 90 × 0,15 + 75 × 0,15 + 80 × 0,15 + 95 × 0,15 + 70 × 0,10 = **83,5**
- **Candidat C :** 95 × 0,30 + 80 × 0,15 + 70 × 0,15 + 75 × 0,15 + 60 × 0,15 + 90 × 0,10 = **80,25**
- **Candidat B :** 60 × 0,30 + 70 × 0,15 + 85 × 0,15 + 90 × 0,15 + 80 × 0,15 + 75 × 0,10 = **74,25**

Regardez ce qui se passe ici. Le candidat C est le plus fort techniquement
(95 en React), mais il décroche sur la collaboration. Le candidat A, solide
partout et excellent en collaboration, ressort premier. Sans grille, on aurait
très bien pu repartir avec C, ébloui par sa maîtrise technique. Avec la grille,
la discussion devient : « on privilégie la technicité ou l'intégration dans
l'équipe ? », et c'est une décision assumée, pas un accident.

## Le cadre légal en France

> « La grille doit rester un outil objectif, dans le cadre légal. » (rappel
> qu'il est bon de se faire, surtout quand on débute dans le recrutement)

Un point que je m'efforce de garder en tête, parce qu'il est facile de
l'oublier dans l'excitation d'un recrutement : en France, l'évaluation d'un
candidat doit reposer sur des **critères objectifs, précis et liés au poste**,
et ne doit en aucun cas être discriminatoire. Le principe est posé par
[l'article L. 1132-1 du code du
travail](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045391841) :
« aucune personne ne peut être écartée d'une procédure de recrutement » en
raison de son origine, de son sexe, de son âge, de sa situation de famille,
de son apparence physique, de ses opinions, de ses convictions religieuses,
de son état de santé, de son handicap, et ainsi de suite. La liste des motifs
protégés est longue, et elle est énumérée par la loi.

La bonne nouvelle, c'est que la matrice que je viens de décrire va
naturellement dans ce sens : en partant de la fiche de poste, elle ancre
l'évaluation dans ce qui est réellement nécessaire pour tenir le rôle. Le
code du travail le prévoit d'ailleurs : certaines différences de traitement
sont autorisées quand elles répondent à une « exigence professionnelle
essentielle et déterminante »
([article L. 1133-1 du code du
travail](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000018881575)).
C'est exactement le type d'outil qui permet de répondre, la conscience
tranquille, à l'exigence de non-discrimination.

Et il y a un bénéfice pratique que je n'avais pas anticipé au début : cette
matrice rend bien plus facile la **réponse aux candidats refusés**. Certains
demandent, à juste titre, des précisions sur la décision. Pouvoir expliquer,
de façon factuelle et argumentée, sur quelles compétences le choix s'est joué
(plutôt que de balbutier un « profil pas assez correspondant »), c'est
nettement plus respectueux, et c'est une trace qui protège aussi l'entreprise.

## La matrice au service de la période d'essai

> « On peut être biaisé par le fait qu'humainement ça se passe bien, mais si
> les compétences attendues ne sont pas atteintes, c'est l'objectif de la
> période d'essai de l'évaluer. » (moi, encore. Et ça résume tout)

La matrice ne s'arrête pas au jour de la signature. La même liste de
compétences, celle qu'on a utilisée pour choisir, je la réutilise pendant la
**période d'essai** pour évaluer objectivement si l'arrivée de la personne
dans l'équipe se passe bien.

C'est un garde-fou précieux, parce que le biais joue dans l'autre sens ici :
une fois la personne en poste, on a envie que ça marche, on s'entend bien, les
premiers échanges sont agréables. « Humainement, ça se passe bien. » Sauf que
c'est précisément le rôle de la période d'essai que de vérifier autre chose :
est-ce que les compétences attendues sont atteintes ? Et si elles ne le sont
pas, c'est ça qu'il faut regarder, sans se laisser porter par le seul confort
relationnel.

Un exemple de grille de période d'essai, où chaque compétence est vérifiée à
des échéances :

| Compétence           | Pondération | J+30 | J+60 | J+90 |
| -------------------- | ----------- | ---- | ---- | ---- |
| React / TypeScript   | 30 %        | …    | …    | …    |
| Accessibilité (a11y) | 15 %        | …    | …    | …    |
| CSS / responsive     | 15 %        | …    | …    | …    |
| Tests                | 15 %        | …    | …    | …    |
| Collaboration        | 15 %        | …    | …    | …    |
| Tooling / CI         | 10 %        | …    | …    | …    |

C'est aussi ce qui permet de justifier, le cas échéant, une **prolongation de
période d'essai** de façon logique : si tous les doutes ne sont pas levés, la
grille vous donne les éléments concrets pour expliquer pourquoi on préfère
prendre un peu plus de temps avant de se prononcer, plutôt qu'une décision
qui semble tomber du ciel ou, pire, une reconduction de pure forme.

## « L'autonomie dès le premier jour »

> « La personne qui arrive doit pouvoir installer les projets en autonomie,
> la doc d'installation doit être claire et le setup du poste de travail doit
> être rapide. » ([Florent Dubost](https://www.linkedin.com/in/florentdubost/),
> mon manager pendant plusieurs années)

Une fois la personne arrivée, l'onboarding commence, et mon obsession porte
sur l'autonomie. L'objectif que je me fixe : **moins d'une demi-journée** pour
qu'une nouvelle personne soit « ready » à contribuer, c'est-à-dire capable de
cloner, d'installer et de lancer les projets toute seule, sans appeler à l'aide
à chaque coin de table.

Pour y arriver, il y a un préalable que je considère comme non négociable :
imposer un **`CONTRIBUTING.md`**, comme on en trouve dans les projets open
source. Ce fichier, à la racine du dépôt, explique comment installer le projet
**from scratch**, mais aussi comment faire une **release** et un **rollback**.
Si la doc d'installation est claire et à jour, la personne qui arrive peut
faire son setup seule ; si elle ne l'est pas, c'est une excellente occasion de
la corriger.

Un squelette de `CONTRIBUTING.md`, que vous pouvez adapter :

```markdown
# CONTRIBUTING.md

## Installation (from scratch)

1. Prérequis : … (versions de Node, base de données, etc.)
2. `git clone <url>` puis `cd <projet>`
3. `cp .env.example .env` et renseigner les variables
4. `bun install` (ou votre gestionnaire de paquets)
5. `bun run dev` pour lancer le projet en local

## Faire une release

1. Créer une branche `release/x.y.z`
2. Mettre à jour la version et le changelog
3. Ouvrir une PR, puis la merger
4. Créer le tag `x.y.z` et le pousser

## Rollback

1. Repousser la version précédente (ou `git revert`)
2. Suivre la procédure de déploiement inverse
3. Vérifier les métriques d'erreur après le retour en arrière
```

Et il y a un truc que j'aime beaucoup pour la toute première contribution :
laisser la nouvelle personne corriger de **petites typos dans la doc
d'installation**. C'est minuscule, mais c'est un premier geste dans le dépôt,
une première pull request, un premier « j'ai contribué ». Et surtout, c'est un
retour d'information en or : si elle a dû corriger des typos ou des étapes
fausses, c'est que la doc méritait justement ces corrections. La personne se
rend utile immédiatement, et le projet s'améliore au passage.

## Ça se prépare avant l'arrivée

L'onboarding ne commence pas le premier jour, il commence **avant**. J'avais
déjà évoqué, dans l'article sur [le 1:1 et le suivi
individuel](/posts/engineering-manager-1-1-et-suivi-individuel), que l'arrivée
d'un alternant ou d'un stagiaire se prépare. C'est vrai pour tout le monde.

Avant que la personne ne franchisse la porte, je m'assure que tout est prêt :
le matériel commandé, les accès créés, les permissions posées, le calendrier
de la première semaine planifié. Rien n'est plus mauvais signal qu'une
personne qui arrive, motivée, et qui passe ses deux premiers jours à attendre
qu'on lui donne un ordinateur ou un accès. Ce temps-là, c'est le temps de
l'enthousiasme initial, et il ne se rattrape pas.

## Premiers jours, premiers objectifs

Les premières semaines sont un investissement : c'est là que se construit la
confiance, et c'est le moment où la personne peut, ou non, s'ancrer dans
l'équipe. Mon approche est de donner très vite des premiers objectifs clairs,
même modestes, pour qu'elle touche rapidement à la valeur produite.

Ça rejoint ce que je décrivais dans l'article sur les [objectifs et la
vision](/posts/engineering-manager-objectifs-et-vision) : de petits jalons
rapides valent mieux qu'un grand chantier flou. La première contribution peut
être une typo dans la doc ; la deuxième, un petit ticket ; et ainsi de suite,
jusqu'à ce que la personne porte un vrai sujet, sur le rythme de la _Mesure_
de l'équipe. Chaque palier atteint renforce l'autonomie et l'envie.

<figure>
  <svg
    viewBox="0 0 560 200"
    role="img"
    aria-label="Frise d'onboarding : préparation avant l'arrivée (J-7), arrivée et setup autonome (J0), premières contributions (S1), premiers vrais sujets (M1), autonomie complète (M3)"
    style="width: 100%; max-width: 560px; height: auto; margin: 0 auto; display: block;"
  >
    <title>Frise d'onboarding</title>
    <line x1="50" y1="88" x2="530" y2="88" stroke="rgb(var(--color-border))" stroke-width="2" />
    <g fill="rgb(var(--color-accent))">
      <circle cx="90" cy="88" r="8" />
      <circle cx="200" cy="88" r="8" />
      <circle cx="310" cy="88" r="8" />
      <circle cx="420" cy="88" r="8" />
    </g>
    <circle cx="510" cy="88" r="8" fill="none" stroke="rgb(var(--color-accent))" stroke-width="2" />
    <g fill="rgb(var(--color-text-base))" font-size="12" font-weight="600" text-anchor="middle">
      <text x="90" y="68">J-7</text>
      <text x="200" y="68">J0</text>
      <text x="310" y="68">S1</text>
      <text x="420" y="68">M1</text>
      <text x="510" y="68">M3</text>
    </g>
    <g fill="rgb(var(--color-text-base))" font-size="10" text-anchor="middle" opacity="0.85">
      <text x="90" y="120">Tout est prêt</text>
      <text x="200" y="120">Arrivée</text>
      <text x="310" y="120">Contributions</text>
      <text x="420" y="120">Premiers sujets</text>
      <text x="510" y="120">Autonomie</text>
    </g>
    <g fill="rgb(var(--color-text-base))" font-size="9" text-anchor="middle" opacity="0.6">
      <text x="90" y="136">matériel, accès, CONTRIBUTING.md</text>
      <text x="200" y="136">setup autonome</text>
      <text x="310" y="136">typos, petits tickets</text>
      <text x="420" y="136">valeur produite</text>
      <text x="510" y="136">intégration complète</text>
    </g>
    <text x="280" y="176" text-anchor="middle" fill="rgb(var(--color-accent))" font-size="11" font-weight="600">Objectif : moins d'une demi-journée pour être ready à contribuer</text>
  </svg>
  <figcaption style="text-align: center; font-size: 0.875rem; margin-top: 0.5rem;">
    De la préparation avant l'arrivée à l'autonomie complète : chaque palier
    est une petite victoire qui rend la suite plus facile.
  </figcaption>
</figure>

## Le parrain, ou buddy

Un levier que je trouve très efficace, c'est de confier la nouvelle personne à
un **parrain** (un _buddy_), volontaire dans l'équipe, qui n'est pas son
manager et pas forcément son référent technique. Le rôle du parrain, c'est la
caisse de résonance informelle : les questions qu'on n'ose pas poser en
réunion, les codes de l'équipe, les usages implicites qu'aucune doc ne
capture.

Ce que j'évite, c'est de charger le parrain en plus de tout le reste. Un
parrain, ça se choisit, ça se prépare, et ça se reconnaît. Et c'est aussi un
bon exercice pour la personne qui parraine : expliquer à un nouvel arrivant,
c'est se forcer à expliciter ce qu'on croyait évident, un apprentissage qui
vaut de l'or, dans les deux sens.

## Alternants, stagiaires et profils juniors

Enfin, un mot sur les profils en apprentissage, que j'avais commencé à aborder
dans l'article sur le suivi individuel. Pour eux, l'onboarding est plus long et
plus soutenu : les créneaux réguliers, le « deux sujets : l'os » (un sujet
difficile plus un sujet sans blocage pour ne jamais être à l'arrêt), tout
cela prend encore plus de sens.

Ce qui change, c'est l'horizon temporel et le niveau d'accompagnement. Là où
une personne expérimentée vise l'autonomie en une demi-journée, un junior ou
un alternant a besoin de points de passage fréquents et d'un cadre qui
rassure. L'objectif reste le même (l'autonomie), le chemin est simplement
plus long, et c'est normal. Ce qui compte, c'est que la progression soit
visible et partagée, pas qu'elle soit rapide à tout prix.

## Et la suite ?

Il reste d'autres aspects du recrutement et de l'onboarding que je n'ai pas
abordés ici. Si vous voulez que je précise un point ou que j'aborde un thème
en particulier, mes réseaux sont accessibles depuis ce blog : écrivez-moi, je
serai ravi de vous lire. Et comme toujours, vous pouvez retrouver l'ensemble
de la série via le tag
[engineering-management](/tags/engineering-management).

Dans un prochain épisode, je compte m'attarder sur l'intelligence
artificielle : ce qu'elle change concrètement dans mon quotidien de manager,
et ce qu'elle ne change pas.
