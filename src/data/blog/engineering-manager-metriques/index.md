---
title: "Engineering manager : les métriques que je surveille"
description: |
  Quatrième article de la série sur mon retour d'expérience en tant
  qu'engineering manager. Ce billet porte sur les métriques que je surveille :
  lesquelles ont vraiment de la valeur, lesquelles ne veulent pas dire grand-chose,
  et pourquoi je les lis comme des tendances plutôt que comme des absolus.
pubDatetime: 2026-09-17
language: fr
ogImage: "./cover.webp"
tags:
  - engineering-management
---

C'est le quatrième article de ma série sur ce que le rôle d'engineering
manager m'a appris. Comme pour les épisodes précédents, ce qui suit n'est ni
une méthode ni une vérité générale : c'est un retour d'expérience personnel,
structuré autour des citations et des principes que des personnes qui ont
compté dans mon parcours m'ont transmis, et de ce qu'ils m'apportent au
quotidien.

Le premier épisode portait sur le [rôle et la posture d'engineering
manager](/posts/engineering-manager-role-et-posture), le deuxième sur [le
1:1 et le suivi individuel](/posts/engineering-manager-1-1-et-suivi-individuel),
le troisième sur [donner des objectifs et de la
vision](/posts/engineering-manager-objectifs-et-vision). Vous pouvez retrouver
tous les articles de la série sur la page du tag
[engineering-management](/tags/engineering-management).

Ce billet-ci se concentre sur les métriques que je surveille en tant
qu'engineering manager : lesquelles j'utilise vraiment au quotidien, celles
dont je me méfie, et la façon dont je les lis : pas comme des absolus, mais
comme des tendances.

N'hésitez pas à me proposer les métriques que vous suivez avec vos équipes :
je serais curieux de découvrir comment chacun aborde le sujet. Mes réseaux
sont accessibles depuis ce blog.

## Pourquoi je surveille des métriques

Avant de parler des chiffres eux-mêmes, une précision sur la posture. Une
métrique, ce n'est pas un tableau de bord qu'on brandit pour justifier une
décision. C'est avant tout un instrument de calibrage : elle m'aide à
comprendre où en est l'équipe, à détecter tôt un problème, et à savoir si mes
choix de découpage ou de priorisation produisent l'effet attendu.

J'avais déjà posé cette idée dans l'article précédent à propos du lead time :
ce n'est pas un outil de flicage, c'est un instrument de calibrage. La même
logique s'applique à toutes les métriques. Dès qu'un chiffre sert à juger une
personne plutôt qu'à comprendre une situation, il devient toxique, et je
reviendrai sur ce point à la fin.

## Ce qui ne veut pas dire grand-chose : la vélocité

> « La vélocité individuelle ou même la vélocité de l'équipe, ça veut pas
> dire grand-chose. » ([Florent Dubost](https://www.linkedin.com/in/florentdubost/),
> mon manager pendant plusieurs années)

C'est une phrase que je me répète souvent, parce que la vélocité a tout pour
plaire : elle se calcule facilement, elle se résume en un chiffre, et elle
donne l'impression de mesurer « combien on produit ». Sauf que ça ne mesure
en réalité presque rien.

D'abord, comparer la vélocité de deux équipes n'a aucun sens : chaque équipe
découpe, estime et compte ses points à sa façon. Ensuite, même au sein d'une
même équipe, la vélocité agrège tout ce qui n'est pas comparable : un point
n'est pas une valeur livrée. Une équipe peut très bien avoir une vélocité qui
augmente pendant que la valeur délivrée, elle, plafonne ou régresse.

La seule question qui m'intéresse, c'est : est-ce qu'on livre, en valeur,
ce qu'on avait prévu de livrer ? La vélocité ne répond pas à cette question.
C'est pour ça que je m'en méfie.

Et il y a une autre raison, toute pratique : la vélocité est hyper sensible à
la disponibilité de l'équipe et aux événements « extérieurs ». Une personne
en vacances, un incident, une période d'onboarding, une semaine de
conférences : tout ça fait chuter la vélocité sans qu'on ait rien changé à
notre façon de travailler. Difficile, dans ces conditions, d'en tirer des
analyses directes. À la limite, elle ne raconte que des variations, pas des
causes.

## Ce que je regarde vraiment : le cycle time

> « Le throughput, franchement, pas trop. Le cycle time en médiane et en
> moyenne, oui, si je regarde. » (moi, en résumant ce que je regarde au
> quotidien)

Si je devais ne garder qu'une famille de métriques, ce serait le temps. Le
_lead time_ (déjà vu) mesure le temps entre l'idée et la livraison. Le _cycle
time_, lui, mesure le temps entre le début du travail sur un sujet et sa
mise en production. Deux angles proches, mais le cycle time a l'avantage de
commencer là où l'équipe a réellement la main.

Le throughput, c'est-à-dire combien d'éléments on livre par unité de temps,
je le regarde très peu. Il raconte un volume brut, sans rien dire de la valeur ni
de la difficulté. À l'inverse, je surveille le cycle time, et je le regarde
de deux façons complémentaires :

- la **médiane**, qui me dit ce qui se passe pour le sujet « typique » de
  l'équipe, sans être perturbée par les extrêmes ;
- la **moyenne**, qui, elle, est sensible aux valeurs extrêmes : si elle
  s'envole pendant que la médiane reste stable, c'est le signe qu'il existe
  des sujets coincés quelque part, qui prennent un temps anormal.

Confronter les deux, c'est un réflexe simple qui en dit long : une médiane
basse avec une moyenne haute, c'est la signature d'un backlog où quelques
sujets traînent depuis des semaines pendant que le reste avance vite.

<figure>
  <svg
    viewBox="0 0 520 240"
    role="img"
    aria-label="Comparaison entre médiane et moyenne du cycle time : la moyenne est tirée vers le haut par quelques sujets très lents, tandis que la médiane reste basse"
    style="width: 100%; max-width: 560px; height: auto; margin: 0 auto; display: block;"
  >
    <title>Médiane et moyenne du cycle time</title>
    <text x="40" y="30" fill="rgb(var(--color-text-base))" font-size="13" font-weight="700">Cycle time par sujet, trié</text>
    <g stroke="rgb(var(--color-border))" stroke-width="1" stroke-opacity="0.35">
      <line x1="40" y1="44" x2="40" y2="200" />
      <line x1="40" y1="200" x2="480" y2="200" />
    </g>
    <g fill="rgb(var(--color-accent))" fill-opacity="0.85">
      <rect x="46" y="150" width="18" height="50" rx="2" />
      <rect x="70" y="140" width="18" height="60" rx="2" />
      <rect x="94" y="130" width="18" height="70" rx="2" />
      <rect x="118" y="120" width="18" height="80" rx="2" />
      <rect x="142" y="112" width="18" height="88" rx="2" />
      <rect x="166" y="120" width="18" height="80" rx="2" />
      <rect x="190" y="128" width="18" height="72" rx="2" />
      <rect x="214" y="140" width="18" height="60" rx="2" />
      <rect x="238" y="150" width="18" height="50" rx="2" />
      <rect x="262" y="160" width="18" height="40" rx="2" />
    </g>
    <g fill="rgb(var(--color-border))" fill-opacity="0.75">
      <rect x="286" y="120" width="18" height="80" rx="2" />
      <rect x="310" y="96" width="18" height="104" rx="2" />
      <rect x="334" y="60" width="18" height="140" rx="2" />
      <rect x="358" y="40" width="18" height="160" rx="2" />
      <rect x="382" y="20" width="18" height="180" rx="2" />
    </g>
    <line x1="46" y1="150" x2="454" y2="150" stroke="rgb(var(--color-accent))" stroke-width="2" stroke-dasharray="5 4" />
    <text x="260" y="140" text-anchor="middle" fill="rgb(var(--color-accent))" font-size="11" font-weight="700">médiane</text>
    <line x1="40" y1="70" x2="480" y2="70" stroke="rgb(var(--color-border))" stroke-width="2" stroke-dasharray="2 3" />
    <text x="260" y="60" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="11" opacity="0.7">moyenne, tirée vers le haut</text>
  </svg>
  <figcaption style="text-align: center; font-size: 0.875rem; margin-top: 0.5rem;">
    Quelques sujets très lents tirent la moyenne vers le haut, pendant que
    la médiane reste basse : la signature d'un backlog avec des sujets coincés.
  </figcaption>
</figure>

## Le vrai temps de release : deploy + rollback

> « Ok tu déploies en 10 min mais il te faut combien de temps pour rollback ?
> C'est automatisé ? » ([Kenny Dits](https://www.linkedin.com/in/kenny-d-3761b59b/),
> mon chef)

Cette question de Kenny m'a marqué, parce qu'elle déplace le vrai sujet. On a
tous tendance à juger une livraison sur la rapidité du déploiement : « on
déploie en dix minutes ». Sauf que le temps de release ne se limite pas au
deploy. Il faut y ajouter tout ce qu'il faut pour revenir en arrière si
quelque chose ne va pas : le rollback.

Un déploiement en dix minutes sans rollback automatisé, c'est un déploiement
qui peut vous coûter une soirée entière. C'est cette logique qu'il faut
intégrer : **le vrai temps de release, c'est deploy + rollback.** Et un
rollback n'est un vrai filet de sécurité que s'il est automatisé, au même
titre que le deploy, et pas une procédure manuelle qu'on redécouvre dans
l'urgence.

J'en tire une règle simple que j'applique aux créneaux de mise en
production : si quelqu'un de l'équipe libère à 18 h 30 et que le temps total
(deploy + rollback) est d'une heure, alors il faut s'attendre à pouvoir être
occupé jusqu'à 19 h 30. Autrement dit, une release, on la place en
connaissant le pire cas, pas le meilleur.

<figure>
  <svg
    viewBox="0 0 520 250"
    role="img"
    aria-label="Le temps de release se compose du deploy et du rollback ; une release à 18h30 avec une heure de temps total engage jusqu'à 19h30"
    style="width: 100%; max-width: 560px; height: auto; margin: 0 auto; display: block;"
  >
    <title>Le temps de release : deploy + rollback</title>
    <text x="40" y="32" fill="rgb(var(--color-text-base))" font-size="13" font-weight="700">Temps de release = deploy + rollback</text>
    <rect x="40" y="60" width="440" height="52" rx="6" fill="none" stroke="rgb(var(--color-border))" stroke-width="1" />
    <rect x="40" y="60" width="220" height="52" rx="6" fill="rgb(var(--color-accent))" fill-opacity="0.85" />
    <rect x="260" y="60" width="220" height="52" rx="6" fill="rgb(var(--color-border))" fill-opacity="0.55" />
    <text x="150" y="92" text-anchor="middle" fill="rgb(var(--color-fill))" font-size="13" font-weight="600">Deploy</text>
    <text x="370" y="92" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="13" font-weight="600">Rollback</text>
    <text x="150" y="138" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="11">10 min</text>
    <text x="370" y="138" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="11">automatisé ?</text>
    <line x1="60" y1="176" x2="460" y2="176" stroke="rgb(var(--color-border))" stroke-width="1.5" />
    <circle cx="80" cy="176" r="5" fill="rgb(var(--color-accent))" />
    <circle cx="440" cy="176" r="5" fill="rgb(var(--color-border))" />
    <path d="M80 176 L440 176" stroke="rgb(var(--color-accent))" stroke-width="2" stroke-dasharray="5 4" />
    <text x="80" y="202" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="11" font-weight="600">18h30</text>
    <text x="440" y="202" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="11" font-weight="600">19h30</text>
    <text x="260" y="236" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="11" opacity="0.7">Release à 18h30, 1 h de temps total → occupé jusqu'à 19h30</text>
  </svg>
  <figcaption style="text-align: center; font-size: 0.875rem; margin-top: 0.5rem;">
    On place une release en connaissant le pire cas (deploy plus rollback),
    et non en se fiant au temps de deploy seul.
  </figcaption>
</figure>

## Le deploy frequency et mon rapport au déploiement continu

Des métriques DORA, celle que j'exploite principalement, c'est la _deploy
frequency_ : la fréquence à laquelle on met en production. C'est la plus
parlante pour l'équipe, parce qu'elle raconte directement le rythme de
livraison, celui qu'on ressent au quotidien.

Cela dit, je n'applique pas le modèle « déploiement continu à chaque merge
sur la branche principale » de façon dogmatique. C'est un très bon objectif
dans beaucoup d'équipes, mais ce n'est pas une fin en soi. Ma préférence, et
je l'assume, c'est plutôt un **déploiement régulier à chaque _Mesure_**
(cette unité de temps dont je parlais dans l'article précédent), après une
**démo aux stakeholders** pour valider les développements.

Concrètement : on développe pendant la _Mesure_, on présente ce qui est prêt
aux parties prenantes, et c'est après cette validation qu'on déploie. La
fréquence est donc régulière et prévisible, mais elle est pilotée par un
moment de validation humaine plutôt que par chaque merge. Ça colle mieux à la
façon dont je veux que l'équipe avance : livrer souvent, mais en sachant ce
qu'on livre et pourquoi.

Ce choix a aussi un effet d'entraînement sur les parties prenantes. Un
déploiement régulier, à un rythme connu, habitue tout le monde au fait que ce
rythme existe, et crée une forme de confiance dans le « ça sort à la prochaine
_Mesure_ ». Ça prendra quelques mois, mais ce rythme finit par être compris
par l'équipe et autour de l'équipe, et surtout, il évite les sempiternelles
questions du « quand est-ce que ça sort ? ». On sait, et on le sait ensemble.

Enfin, déployer souvent présente deux avantages que je ne veux pas perdre de
vue. D'abord, cela permet de détecter les régressions plus vite : moins il y
a d'écart entre ce qu'on livre et la production, plus il est facile de
remonter à l'origine d'un problème. Ensuite, cela engage moins à chaque
release, tout simplement parce qu'on lance moins de code en production à
chaque fois. Le rythme régulier à chaque _Mesure_ n'est donc pas en
contradiction avec ces bénéfices : il les garde, tout en introduisant le
moment de validation qui me semble indispensable.

Pour fixer ce rythme, une mise en garde : plutôt que de vous donner un
objectif non SMART du type « déployer plus souvent », donnez-vous un rythme
précis et soutenable, et tenez-vous y. Un rythme qu'on tient sur la durée
vaut toujours mieux qu'une ambition qu'on abandonne au bout de deux
semaines.

Et quand vous voulez améliorer le temps de déploiement, pensez à toute la
chaîne deploy + rollback, pas seulement au geste de déploiement en lui-même.
Identifiez l'étape qui prend le plus de temps et attaquez-vous à elle en
priorité : c'est là que vous gagnerez le plus. Pour donner un ordre de
repère, un temps de deploy + rollback viable, pour moi, c'est moins de
trente minutes.

## La rétro radar, pour suivre le qualitatif

Les métriques techniques disent beaucoup du rythme et de la stabilité, mais
elles sont muettes sur l'essentiel : comment les gens se sentent dans
l'équipe. C'est là qu'intervient la **rétro radar**, le format de
[rétrospective en radar](https://www.neatro.io/fr/blog/retrospective-team-radar/)
que [Caroline Le Lay](https://www.linkedin.com/in/caroline-le-lay-leme/), une
amie et ancienne collègue, m'a fait découvrir. Je la fais environ tous les
six mois, et je la trouve très intéressante pour mesurer l'évolution
qualitative et humaine de l'équipe.

Le principe est simple. On définit des axes, chacun représentant une
dimension de la vie d'équipe. Chez moi, ils sont dix : collaboration, fun,
apprentissages, mission, ownership, process, ressources, rôles, vitesse et
valeur. À chaque itération, chaque membre se positionne sur ces axes, et on
reporte les résultats sur un radar : plus on est loin du centre, plus la
dimension est au vert.

Chaque axe correspond à une question précise sur la santé de l'équipe :

| Axe            | Ce que ça mesure                                                        |
| -------------- | ---------------------------------------------------------------------- |
| Collaboration  | Une communication constante et de qualité, respectueuse.               |
| Fun            | Une ambiance agréable, le plaisir à travailler ensemble.               |
| Apprentissages | Des compétences qui progressent, itération après itération.            |
| Mission        | L'alignement sur les objectifs de l'entreprise et la création de valeur.|
| Ownership      | L'autonomie, la capacité à décider par soi-même.                       |
| Process        | Des processus qui aident à créer de la valeur, sans ralentir ni bloquer.|
| Ressources     | L'accès aux moyens matériels et au support nécessaires.                |
| Rôles          | Des rôles et responsabilités clairs, toutes les compétences présentes. |
| Vitesse        | De la valeur produite en respectant les dates, à un rythme sain.       |
| Valeur         | Une valeur mesurable, quantifiable et réalisable par l'équipe.         |

Un détail pratique qui change tout : j'envoie le formulaire à l'avance. Si
chacun remplit son positionnement avant la séance, la rétro elle-même ne sert
plus à collecter des réponses, mais uniquement à échanger, à prendre des
notes sur les résultats, et à définir ensemble des actions. On gagne un temps
précieux et on garde la séance pour ce qui compte : la discussion et les
décisions, pas la saisie.

L'intérêt n'est pas tant la forme du radar à un instant t que son **évolution
d'une itération à l'autre**. On superpose le radar de la fois précédente et
celui du jour : ce qui s'agrandit, ce qui se rétracte, ce qui se dégrade
sans qu'on l'ait vu venir. C'est un excellent détecteur précoce : une
dimension qui se dégrade discrètement pendant deux itérations mérite qu'on
s'y attarde avant que ça ne devienne un problème.

<figure>
  <svg
    viewBox="0 0 560 370"
    role="img"
    aria-label="Un radar à dix axes (collaboration, fun, apprentissages, mission, ownership, process, ressources, rôles, vitesse, valeur) : le polygone de l'itération précédente en pointillés, celui de l'itération actuelle en couleur, montrant l'évolution"
    style="width: 100%; max-width: 560px; height: auto; margin: 0 auto; display: block;"
  >
    <title>Rétro radar : l'évolution entre deux itérations</title>
    <polygon points="280,75 350.6,97.9 394.1,157.9 394.1,232.1 350.6,292.1 280,315 209.4,292.1 165.9,232.1 165.9,157.9 209.4,97.9" fill="none" stroke="rgb(var(--color-border))" stroke-width="1" stroke-opacity="0.35" />
    <polygon points="280,135 315.3,146.5 337.1,176.5 337.1,213.5 315.3,243.5 280,255 244.7,243.5 222.9,213.5 222.9,176.5 244.7,146.5" fill="none" stroke="rgb(var(--color-border))" stroke-width="1.5" stroke-dasharray="5 4" />
    <polygon points="280,93 322.4,136.7 359.9,169 382.7,228.4 325.9,258.1 280,285 223.5,272.7 200.1,221 211.5,172.7 220,112.5" fill="rgb(var(--color-accent))" fill-opacity="0.45" stroke="rgb(var(--color-accent))" stroke-width="2" />
    <g stroke="rgb(var(--color-border))" stroke-width="1" stroke-opacity="0.35">
      <line x1="280" y1="195" x2="280" y2="75" />
      <line x1="280" y1="195" x2="350.6" y2="97.9" />
      <line x1="280" y1="195" x2="394.1" y2="157.9" />
      <line x1="280" y1="195" x2="394.1" y2="232.1" />
      <line x1="280" y1="195" x2="350.6" y2="292.1" />
      <line x1="280" y1="195" x2="280" y2="315" />
      <line x1="280" y1="195" x2="209.4" y2="292.1" />
      <line x1="280" y1="195" x2="165.9" y2="232.1" />
      <line x1="280" y1="195" x2="165.9" y2="157.9" />
      <line x1="280" y1="195" x2="209.4" y2="97.9" />
    </g>
    <g fill="rgb(var(--color-text-base))" font-size="11" font-weight="600">
      <text x="280" y="60" text-anchor="middle">Collaboration</text>
      <text x="356" y="90" text-anchor="start">Fun</text>
      <text x="398" y="156" text-anchor="start">Apprentissages</text>
      <text x="398" y="236" text-anchor="start">Mission</text>
      <text x="352" y="298" text-anchor="middle">Ownership</text>
      <text x="280" y="332" text-anchor="middle">Process</text>
      <text x="208" y="298" text-anchor="middle">Ressources</text>
      <text x="162" y="236" text-anchor="end">Rôles</text>
      <text x="162" y="156" text-anchor="end">Vitesse</text>
      <text x="204" y="90" text-anchor="end">Valeur</text>
    </g>
    <text x="280" y="360" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="11" opacity="0.7">… · itération précédente &nbsp;&nbsp;&nbsp; couleur · itération actuelle</text>
  </svg>
  <figcaption style="text-align: center; font-size: 0.875rem; margin-top: 0.5rem;">
    On ne lit pas le radar comme un absolu, mais comme une évolution d'une
    itération à l'autre.
  </figcaption>
</figure>

Un squelette d'axes que vous pouvez adapter :

```markdown
# Rétro radar · Mesure du AAAA-MM-JJ

| Axe            | Position (1 à 5) | Commentaire |
| -------------- | ---------------- | ----------- |
| Collaboration  | …                | …           |
| Fun            | …                | …           |
| Apprentissages | …                | …           |
| Mission        | …                | …           |
| Ownership      | …                | …           |
| Process        | …                | …           |
| Ressources     | …                | …           |
| Rôles          | …                | …           |
| Vitesse        | …                | …           |
| Valeur         | …                | …           |
```

Comme pour le journal de bord et le brag document vus dans le deuxième
article, l'important est de consigner : c'est en superposant les relevés
successifs qu'on voit l'évolution, pas en se fiant à la mémoire de « ce
qu'on ressentait la dernière fois ».

## Regarder les tendances, pas les absolus

Une dernière chose, peut-être la plus importante. Ce que j'évite avec les
métriques, c'est de les regarder comme des absolus. Un chiffre isolé ne veut
pas dire grand-chose : « notre cycle time est de cinq jours » n'a de sens
que comparé à ce qu'il était il y a un mois, ou à ce qu'on s'était fixé.

Je regarde donc surtout les **tendances et les évolutions**. Est-ce que ça
s'améliore, est-ce que ça se dégrade, est-ce que ça stagne ? C'est la pente
qui m'intéresse, pas la valeur. Une métrique qui se dégrade légèrement mais
dont on connaît la cause est bien moins inquiétante qu'un chiffre stable
dont plus personne ne se demande pourquoi il est ce qu'il est.

Et surtout, une métrique ne doit jamais devenir une cible à atteindre à
tout prix : sinon elle cesse de mesurer la réalité et commence à la
déformer. Le jour où un chiffre devient un jugement sur les personnes plutôt
qu'un instrument de compréhension, il faut savoir le ranger. C'est le
meilleur garde-fou que je connaisse.

## Et la suite ?

Il reste d'autres aspects des métriques que je n'ai pas abordés ici. Si vous
voulez que je précise un point ou que j'aborde un thème en particulier, mes
réseaux sont accessibles depuis ce blog : écrivez-moi, je serai ravi de vous
lire.

Le prochain épisode portera sur **le recrutement, l'onboarding et
l'offboarding**, un sujet que j'ai déjà évoqué en passant dans le deuxième
article. Comme toujours, vous pouvez retrouver l'ensemble de la série via le
tag [engineering-management](/tags/engineering-management).
