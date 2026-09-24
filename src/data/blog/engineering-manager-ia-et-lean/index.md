---
title: "Engineering manager : une parenthèse sur l'IA et le lean"
description: >
  Sixième billet de ma série sur l'engineering manager, et première
  parenthèse. L'IA bouleverse nos manières de travailler, pas notre objectif :
  maximiser la valeur apportée. Un détour par le lean et les 3M (Muda, Mura,
  Muri) pour lire ce que l'IA change, et surtout ce qu'elle ne change pas.
pubDatetime: 2026-10-01
ogImage: "./cover.webp"
language: fr
tags:
  - engineering-management
---

C'est le sixième article de ma série sur ce que le rôle d'engineering
manager m'a appris, et c'est aussi une parenthèse. Comme pour les épisodes
précédents, ce qui suit n'est ni une méthode ni une vérité générale :
c'est un retour d'expérience personnel sur ce que l'IA change, ou pas, dans la
façon dont je conçois le travail d'une équipe d'ingénierie.

Les épisodes précédents portaient sur le [rôle et la posture
d'engineering manager](/posts/engineering-manager-role-et-posture), [le 1:1
et le suivi individuel](/posts/engineering-manager-1-1-et-suivi-individuel),
[les objectifs et la vision](/posts/engineering-manager-objectifs-et-vision)
et [les métriques que je surveille](/posts/engineering-manager-metriques).
Vous pouvez retrouver tous les articles de la série sur la page du tag
[engineering-management](/tags/engineering-management).

J'ai appelé ce billet une parenthèse parce qu'il n'est pas un épisode de plus
dans la progression de la série : c'est un arrêt, un détour, pour regarder un
sujet qui traverse tous les autres.

Ce qui m'a poussé à écrire cette parenthèse, c'est une conviction simple :
**l'IA bouleverse nos manières de travailler, mais elle ne change en rien
notre objectif principal.** On cherche toujours la même chose : maximiser
l'apport de valeur de nos contributions.

## Aller plus vite n'est pas une fin en soi

> « Deux prompts et quinze minutes pour une feature, ça ne fait pas une
> feature à quinze minutes de valeur. » (moi, en résumant une conversation
> qui revient souvent)

Le premier réflexe quand on parle d'IA dans une équipe d'ingénierie, c'est la
vitesse. « On va livrer plus vite. » C'est vrai, et c'est une vraie
opportunité. Mais la vitesse n'est pas une fin en soi : elle ne devient
intéressante que si elle s'applique à quelque chose qui a de la valeur.

Il y a deux façons d'aller plus vite qui ne servent à rien :

- aller plus vite pour livrer des choses qui n'ont pas de valeur ;
- aller plus vite pour s'accumuler dans un goulot d'étranglement.

Dans les deux cas, la vitesse ne crée rien. Elle produit juste plus vite ce
qu'on n'aurait pas dû produire, ou elle remplit un tuyau qui ne se vide pas.
C'est le point que j'essayais de poser dans l'article sur les métriques : la
seule question qui compte, c'est de savoir si on livre, en valeur, ce qu'on
avait prévu de livrer. La vitesse ne répond pas à cette question.

<figure>
  <svg
    viewBox="0 0 520 300"
    role="img"
    aria-label="Matrice à deux axes : la vitesse en ordonnée (lent ou rapide), la valeur en abscisse (sans valeur ou avec valeur). Sans valeur, aller vite ne fait que produire du gaspillage plus vite. Avec valeur, aller vite est l'idéal."
    style="width: 100%; max-width: 560px; height: auto; margin: 0 auto; display: block;"
  >
    <title>La vitesse ne crée pas la valeur</title>
    <text x="260" y="26" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="13" font-weight="700">Vitesse ≠ valeur</text>
    <text x="44" y="46" text-anchor="start" fill="rgb(var(--color-text-base))" font-size="11" opacity="0.7">Sans valeur</text>
    <text x="476" y="46" text-anchor="end" fill="rgb(var(--color-text-base))" font-size="11" opacity="0.7">Avec valeur</text>
    <line x1="40" y1="60" x2="480" y2="60" stroke="rgb(var(--color-border))" stroke-width="1" />
    <line x1="260" y1="60" x2="260" y2="250" stroke="rgb(var(--color-border))" stroke-width="1" />
    <line x1="40" y1="60" x2="40" y2="250" stroke="rgb(var(--color-border))" stroke-width="1" />
    <line x1="480" y1="60" x2="480" y2="250" stroke="rgb(var(--color-border))" stroke-width="1" />
    <line x1="40" y1="250" x2="480" y2="250" stroke="rgb(var(--color-border))" stroke-width="1" />
    <line x1="40" y1="155" x2="480" y2="155" stroke="rgb(var(--color-border))" stroke-width="1" />
    <rect x="40" y="60" width="220" height="95" fill="rgb(var(--color-border))" fill-opacity="0.12" />
    <rect x="260" y="60" width="220" height="95" fill="rgb(var(--color-accent))" fill-opacity="0.7" />
    <rect x="40" y="155" width="220" height="95" fill="rgb(var(--color-border))" fill-opacity="0.06" />
    <rect x="260" y="155" width="220" height="95" fill="rgb(var(--color-accent))" fill-opacity="0.35" />
    <text x="150" y="120" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="12" font-weight="600">Gaspillage,</text>
    <text x="150" y="137" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="12" font-weight="600">mais plus vite</text>
    <text x="370" y="120" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="12" font-weight="700">Idéal</text>
    <text x="150" y="212" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="12" font-weight="600">Gaspillage</text>
    <text x="370" y="212" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="12" font-weight="600">Utile, à accélérer</text>
    <text x="60" y="78" text-anchor="start" fill="rgb(var(--color-text-base))" font-size="10" opacity="0.6">rapide</text>
    <text x="60" y="233" text-anchor="start" fill="rgb(var(--color-text-base))" font-size="10" opacity="0.6">lent</text>
    <text x="460" y="78" text-anchor="end" fill="rgb(var(--color-text-base))" font-size="10" opacity="0.6">rapide</text>
    <text x="460" y="233" text-anchor="end" fill="rgb(var(--color-text-base))" font-size="10" opacity="0.6">lent</text>
    <text x="260" y="276" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="11" opacity="0.7">L'axe horizontal est le seul qui compte.</text>
  </svg>
  <figcaption style="text-align: center; font-size: 0.875rem; margin-top: 0.5rem;">
    La vitesse déplace sur l'axe vertical, elle ne change pas la colonne :
    ce qui n'a pas de valeur n'en gagne pas en étant produit plus vite.
  </figcaption>
</figure>

Et il y a la question du coût de maintenance. Une feature sans valeur ajoute
au coût de maintenance de l'ensemble du code, qu'elle ait été écrite à la main
ou générée en quinze minutes. Le fait qu'elle ait été produite vite ne change
rien à ce qu'elle va coûter à maintenir pendant des années. L'IA abaisse le
coût de production ; elle ne change pas le coût de possession.

J'avais déjà évoqué une version de cette idée dans l'article sur les objectifs
et la vision, à propos des [backlogs qui deviennent des cimetières
d'intentions](/posts/engineering-manager-objectifs-et-vision#pas-de-ticket-pour-dans-six-mois).
L'IA rend la question plus urgente, pas moins.

## Le lean et les 3M

Pour donner une forme à cette intuition, j'ai eu la chance de découvrir il y a
quelques années certains concepts du lean manufacturing. Le lean, c'est cette
discipline née chez Toyota[^lean] qui consiste à maximiser la valeur pour le
client en éliminant tout ce qui ne la crée pas. J'y ai trouvé trois notions
(les « 3M ») qui me servent aujourd'hui de grille de lecture pour l'usage que
je fais de l'IA, et pour la façon dont je vois les équipes déléguer à des
agents IA.

Les trois M sont le _muda_, le _mura_ et le _muri_ :

- le **muda** (無駄), c'est le gaspillage : tout ce qui consomme des ressources
  sans créer de valeur ;
- le **mura** (斑), c'est l'irrégularité : l'inconstance de la charge, les
  à-coups ;
- le **muri** (無理), c'est la surcharge : pousser une personne, une machine ou
  un système au-delà de ses limites.

Trois mots japonais, trois angles différents sur la même question : qu'est-ce
qui, dans notre façon de travailler, nous éloigne de la valeur ?

<figure>
  <svg
    viewBox="0 0 560 340"
    role="img"
    aria-label="Les trois M du lean : Muda, le gaspillage, ce qui consomme sans créer de valeur ; Mura, l'irrégularité, les à-coups de la charge ; Muri, la surcharge, pousser au-delà des limites. Pour chacun, l'angle que l'IA introduit."
    style="width: 100%; max-width: 560px; height: auto; margin: 0 auto; display: block;"
  >
    <title>Les 3M : Muda, Mura, Muri</title>
    <g>
      <rect x="28" y="60" width="168" height="200" rx="6" fill="none" stroke="rgb(var(--color-border))" stroke-width="1" />
      <rect x="28" y="60" width="168" height="44" rx="6" fill="rgb(var(--color-border))" fill-opacity="0.45" />
      <text x="112" y="88" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="15" font-weight="700">Muda</text>
      <text x="112" y="116" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="13">無駄</text>
      <text x="112" y="136" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="10" font-weight="600">Le gaspillage</text>
      <text x="112" y="160" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="10">Ce qui consomme</text>
      <text x="112" y="173" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="10">sans créer de valeur.</text>
      <text x="112" y="204" text-anchor="middle" fill="rgb(var(--color-accent))" font-size="10" font-weight="600">IA : le rend moins cher</text>
      <text x="112" y="217" text-anchor="middle" fill="rgb(var(--color-accent))" font-size="10" font-weight="600">à produire</text>
    </g>
    <g>
      <rect x="210" y="60" width="168" height="200" rx="6" fill="none" stroke="rgb(var(--color-border))" stroke-width="1" />
      <rect x="210" y="60" width="168" height="44" rx="6" fill="rgb(var(--color-border))" fill-opacity="0.45" />
      <text x="294" y="88" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="15" font-weight="700">Mura</text>
      <text x="294" y="116" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="13">斑</text>
      <text x="294" y="136" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="10" font-weight="600">L'irrégularité</text>
      <text x="294" y="160" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="10">Les à-coups, l'inconstance</text>
      <text x="294" y="173" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="10">de la charge.</text>
      <text x="294" y="204" text-anchor="middle" fill="rgb(var(--color-accent))" font-size="10" font-weight="600">IA : s'accumule</text>
      <text x="294" y="217" text-anchor="middle" fill="rgb(var(--color-accent))" font-size="10" font-weight="600">au goulot</text>
    </g>
    <g>
      <rect x="392" y="60" width="168" height="200" rx="6" fill="none" stroke="rgb(var(--color-border))" stroke-width="1" />
      <rect x="392" y="60" width="168" height="44" rx="6" fill="rgb(var(--color-border))" fill-opacity="0.45" />
      <text x="476" y="88" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="15" font-weight="700">Muri</text>
      <text x="476" y="116" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="13">無理</text>
      <text x="476" y="136" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="10" font-weight="600">La surcharge</text>
      <text x="476" y="160" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="10">Pousser au-delà</text>
      <text x="476" y="173" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="10">des limites.</text>
      <text x="476" y="204" text-anchor="middle" fill="rgb(var(--color-accent))" font-size="10" font-weight="600">IA : surcharge</text>
      <text x="476" y="217" text-anchor="middle" fill="rgb(var(--color-accent))" font-size="10" font-weight="600">la relecture</text>
    </g>
    <text x="280" y="292" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="11" opacity="0.7">Trois angles sur la même question : la valeur.</text>
  </svg>
  <figcaption style="text-align: center; font-size: 0.875rem; margin-top: 0.5rem;">
    Muda, Mura, Muri : le gaspillage, l'irrégularité, la surcharge, et ce que
    l'IA change pour chacun.
  </figcaption>
</figure>

## Muda : l'IA qui rend le gaspillage moins cher

La première chose que l'IA change, c'est le prix du gaspillage.

Avant, produire du code avait un coût : un développeur, des heures, une
attention. Ce coût était un frein naturel à la production de muda, imparfait
mais réel. Avec l'IA, le coût marginal de production d'une feature,
d'une fonctionnalité, d'un bout de code, tombe vers zéro. On peut produire du
muda en quantité industrielle, presque gratuitement.

Ce que ça change, c'est que la chasse au muda devient plus importante
qu'avant, pas moins. Le frein naturel a disparu : il ne reste que la
discipline. C'est le cœur de ma lecture des 3M avec l'IA : la technologie
abaisse le coût de l'erreur, elle n'abaisse pas son coût de réparation.

> « L'IA ne rend pas le travail sans valeur moins cher à porter, elle le rend
> juste moins cher à produire. » (moi, en essayant de mettre le paragraphe
> ci-dessus dans une phrase)

Mais il y a un deuxième visage du muda avec l'IA, et il est vertueux. Le muda,
dans le logiciel, c'est aussi tout ce toil, toutes ces tâches répétitives qui
ne sont pas de la valeur mais qu'il faut bien faire : une migration mécanique,
un refactoring répétitif, une mise à jour de dépendances, la génération d'un
bout de code à partir d'une spécification claire. Là, déléguer à un agent ce
qui est du vrai muda, c'est retirer du gaspillage sans en créer à la place.
C'est l'usage de l'IA que je trouve le plus sain : pas produire plus, mais
débarrasser l'équipe de ce qui n'apporte pas de valeur.

## Mura : l'IA et les goulots d'étranglement

Le deuxième angle, c'est le mura : l'irrégularité, les à-coups.

L'IA accélère la production de code. Mais la production de code n'est pas
toute la chaîne. Derrière, il y a la revue, la validation, les tests, le
déploiement, l'analyse, la donnée, les décisions produit. Si l'un de ces
maillons est le goulot, accélérer la production ne fait que créer du stock :
du code qui attend, du travail en cours qui s'accumule, des choses qu'on
commence et qu'on ne finit pas.

C'est exactement le mura : produire plus vite que le reste de la chaîne ne
peut absorber, c'est créer de l'irrégularité, des à-coups, du travail qui
s'empile.

<figure>
  <svg
    viewBox="0 0 560 260"
    role="img"
    aria-label="Chaîne de livraison : la production, accélérée par l'IA, envoie du code vers une revue qui est le goulot d'étranglement. Le code s'accumule en stock avant le goulot, car l'aval ne peut absorber plus vite que lui."
    style="width: 100%; max-width: 560px; height: auto; margin: 0 auto; display: block;"
  >
    <defs>
      <marker id="goulot-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="rgb(var(--color-border))" />
      </marker>
    </defs>
    <title>Le goulot d'étranglement</title>
    <text x="280" y="26" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="13" font-weight="700">Le goulot d'étranglement</text>
    <rect x="24" y="120" width="132" height="80" rx="8" fill="rgb(var(--color-accent))" fill-opacity="0.22" stroke="rgb(var(--color-border))" stroke-width="1" />
    <text x="90" y="153" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="12.5" font-weight="600">Production</text>
    <text x="90" y="171" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="10" opacity="0.8">l'IA accélère</text>
    <line x1="156" y1="160" x2="188" y2="160" stroke="rgb(var(--color-border))" stroke-width="2.5" marker-end="url(#goulot-arrow)" />
    <rect x="192" y="168" width="50" height="13" rx="3" fill="rgb(var(--color-border))" fill-opacity="0.7" />
    <rect x="192" y="152" width="50" height="13" rx="3" fill="rgb(var(--color-border))" fill-opacity="0.7" />
    <rect x="192" y="136" width="50" height="13" rx="3" fill="rgb(var(--color-border))" fill-opacity="0.7" />
    <rect x="192" y="120" width="50" height="13" rx="3" fill="rgb(var(--color-border))" fill-opacity="0.7" />
    <text x="217" y="200" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="10" opacity="0.85">du code qui attend</text>
    <text x="286" y="112" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="9" opacity="0.8">capacité limitée</text>
    <rect x="258" y="120" width="56" height="80" rx="8" fill="rgb(var(--color-accent))" fill-opacity="0.85" stroke="rgb(var(--color-border))" stroke-width="1" />
    <text x="286" y="155" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="12.5" font-weight="700">Revue</text>
    <text x="286" y="173" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="10">goulot</text>
    <line x1="314" y1="160" x2="346" y2="160" stroke="rgb(var(--color-border))" stroke-width="2" marker-end="url(#goulot-arrow)" />
    <rect x="350" y="120" width="186" height="80" rx="8" fill="rgb(var(--color-accent))" fill-opacity="0.14" stroke="rgb(var(--color-border))" stroke-width="1" />
    <text x="443" y="153" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="12.5" font-weight="600">Déploiement</text>
    <text x="443" y="171" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="10" opacity="0.8">à la vitesse du goulot</text>
    <text x="280" y="240" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="11" opacity="0.7">Produire plus vite que le goulot ne peut absorber, c'est créer du stock.</text>
  </svg>
  <figcaption style="text-align: center; font-size: 0.875rem; margin-top: 0.5rem;">
    L'IA accélère la production, mais si la revue reste le goulot, le code
    s'accumule avant de passer : du stock, pas de la valeur livrée.
  </figcaption>
</figure>

La logique du lean, ici, c'est de ne pas accélérer plus vite que le goulot
d'étranglement. Si le goulot, c'est la revue, alors produire deux fois plus de
pull requests n'a aucun intérêt : ça fait juste deux fois plus de PR à relire.
L'IA ne déplace pas le goulot ; elle le fait juste apparaître plus vite. Et
quand on a un goulot, la bonne question n'est pas « comment produire plus
vite », mais « comment faire passer le goulot plus vite », ou comment ne pas
lui envoyer ce qui n'a pas de valeur.

## Muri : l'IA qui surcharge

Le troisième M, c'est le muri : la surcharge.

Une ligne qui me sert beaucoup : un agent IA n'est fiable que jusqu'à un
certain point. Au-delà, il produit du plausible, pas du correct. Demander à un
agent de faire une tâche au-delà de sa fiabilité, c'est créer du muri, et le
muri se paie toujours : en défauts, en corrections, en relecture.

Il y a aussi la surcharge humaine. Quand l'IA produit plus vite, quelqu'un
doit valider plus vite. Si l'équipe ne grandit pas et que les garde-fous
restent les mêmes, alors l'IA ne fait que déplacer la charge : on passe moins
de temps à écrire, et plus de temps à relire ce qu'un agent a produit. Le
temps gagné en production est simplement racheté en validation. Ce n'est pas
une critique de l'IA, c'est une loi du mura et du muri : on ne supprime pas
une contrainte en la poussant un peu plus loin, on la déplace.

## Une grille pour déléguer aux agents

Le bon usage, c'est de connaître la limite de fiabilité de l'outil et de
cadrer la délégation en dessous de cette limite : en découpant la tâche, en
donnant un contexte clair, en gardant la décision et le jugement là où ils
doivent rester. Si je devais résumer tout ça en un livrable, ce serait une
grille de trois questions à se poser avant de déléguer quelque chose à un
agent IA. Chaque question correspond à un M, et chaque M à un piège :

| Avant de déléguer à un agent…                          | Le M         | Si ça coince                                                       |
| ------------------------------------------------------ | ------------ | ------------------------------------------------------------------ |
| Ce que je demande a-t-il de la valeur ?                | **Muda**     | La vitesse ne changera rien : ne pas le faire du tout.             |
| Le goulot est-il en aval ?                             | **Mura**     | Accélérer ne fera que créer du stock : lisser, ou traiter le goulot d'abord. |
| L'agent est-il fiable, et la relecture soutenable ?    | **Muri**     | Découper, cadrer, ou ne pas déléguer ce qui exige un jugement que l'agent n'a pas. |

Un exemple pour rendre la grille concrète : une migration technique que
l'équipe traîne depuis des mois. Est-ce que ça a de la valeur ? Oui, on retire
une dette et on débloque du travail derrière. Le goulot est-il en aval ? Si la
revue est déjà saturée, générer la migration ne fera qu'ajouter des pull
requests à relire : on attaque d'abord le goulot, ou on découpe pour que ça
passe sans tout bloquer. L'agent est-il fiable pour ça ? Une migration
mécanique, bien cadrée, oui : c'est exactement dans ses limites. On délègue
donc, avec un périmètre borné et une relecture ciblée. Le même exercice sur
une feature sans valeur aboutirait à la conclusion inverse : on ne la ferait
simplement pas, même si elle ne coûte que quinze minutes.

Trois questions, trois angles sur la même obsession : la valeur. Ce n'est pas
une check-list magique, c'est un réflexe. Et comme pour les autres outils de
la série, je l'utilise comme un instrument de calibrage : elle ne dit pas quoi
faire, elle dit où regarder avant de décider.

## Pour conclure

C'était la parenthèse. Je la referme ici, avec l'idée qui la résume : l'IA
change nos manières de travailler, pas notre objectif. Elle rend le gaspillage
moins cher, elle amplifie les goulots, elle déplace la surcharge, et dans les
trois cas, la réponse n'est pas dans l'outil, elle est dans une discipline que
le lean nomme depuis longtemps.

Comme toujours, vous pouvez retrouver l'ensemble de la série via le tag
[engineering-management](/tags/engineering-management).

[^lean]:
    Le lean manufacturing, inspiré du Toyota Production System, cherche à
    maximiser la valeur pour le client en éliminant systématiquement ce qui ne
    la crée pas. Les « 3M » (muda, mura, muri) en sont l'un des concepts de
    base. Voir par exemple la page Wikipédia sur le
    [système de production de Toyota](https://fr.wikipedia.org/wiki/Syst%C3%A8me_de_production_de_Toyota).
