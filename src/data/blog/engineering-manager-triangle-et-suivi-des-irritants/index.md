---
title: "Engineering manager : le triangle et le suivi des irritants"
description: >
  Septième article de la série sur mon retour d'expérience en tant
  qu'engineering manager. Ce billet porte sur le triangle que forme la
  relation de management (toi, moi, l'entreprise) et sur le suivi des
  irritants remontés en 1:1, pour qu'une remontée serve toujours à quelque
  chose.
pubDatetime: 2026-10-07
language: fr
# TODO(antoine): ajouter l'image de couverture (cover.webp) et décommenter ogImage une fois la piste choisie — ne rien télécharger sans accord.
# ogImage: "./cover.webp"
tags:
  - engineering-management
---

<!-- TODO(antoine): confirmer la date de publication (2026-10-07 par défaut, un mercredi). -->

C'est le septième article de ma série sur ce que le rôle d'engineering
manager m'a appris. Comme pour les épisodes précédents, ce qui suit n'est ni
une méthode ni une vérité générale : c'est un retour d'expérience personnel,
structuré autour des citations et des principes que des personnes qui ont
compté dans mon parcours m'ont transmis, et de ce qu'ils m'apportent au
quotidien.

Les épisodes précédents portaient sur le [rôle et la posture d'engineering
manager](/posts/engineering-manager-role-et-posture), [le 1:1 et le suivi
individuel](/posts/engineering-manager-1-1-et-suivi-individuel), [les
objectifs et la vision](/posts/engineering-manager-objectifs-et-vision),
[les métriques que je surveille](/posts/engineering-manager-metriques), [le
recrutement et l'onboarding](/posts/engineering-manager-recrutement-onboarding),
puis, plus récemment, sur une [parenthèse sur l'IA et le
lean](/posts/engineering-manager-ia-et-lean). Vous pouvez retrouver tous les
articles de la série sur la page du tag
[engineering-management](/tags/engineering-management).

Ce billet-ci se concentre sur deux choses qui vont ensemble : la façon dont
je lis la relation avec chaque membre de l'équipe — je l'appelle le triangle —
et le suivi des irritants, ces petites choses qui grattent, qu'on me remonte
en 1:1, et qui doivent, pour rester vivantes, servir à quelque chose.

## Le triangle

> « TODO(antoine): mettre ici la citation du brouillon sur le triangle (ou
> l'idée de départ). »

Quand j'ai commencé à manager, je voyais la relation avec chaque membre de
l'équipe comme une ligne : deux personnes en face à face, un 1:1. Avec
l'expérience, je ne la lis plus comme une ligne mais comme un triangle, à
trois sommets : **moi**, **toi**, et **l'entreprise**. Le troisième sommet
est toujours dans la pièce, même quand personne ne le nomme.

<figure>
  <svg
    viewBox="0 0 560 360"
    role="img"
    aria-label="Le triangle du management : trois sommets, Moi en haut, Toi à droite, L'entreprise à gauche, reliés par des flèches doubles indiquant que les questions circulent dans les deux sens, du manager vers le managé et du managé vers le manager"
    style="width: 100%; max-width: 560px; height: auto; margin: 0 auto; display: block;"
  >
    <defs>
      <marker id="tri-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="rgb(var(--color-accent))" />
      </marker>
    </defs>
    <title>Le triangle Toi / Moi / L'entreprise</title>
    <polygon
      points="280,60 500,300 60,300"
      fill="rgb(var(--color-accent))"
      fill-opacity="0.06"
      stroke="rgb(var(--color-border))"
      stroke-width="1.5"
    />
    <line x1="478" y1="290" x2="82" y2="290" stroke="rgb(var(--color-border))" stroke-width="1.5" stroke-dasharray="5 4" />
    <line x1="305" y1="84" x2="470" y2="266" stroke="rgb(var(--color-accent))" stroke-width="2" marker-start="url(#tri-arrow)" marker-end="url(#tri-arrow)" />
    <line x1="256" y1="84" x2="90" y2="266" stroke="rgb(var(--color-accent))" stroke-width="2" marker-start="url(#tri-arrow)" marker-end="url(#tri-arrow)" />
    <text x="420" y="150" text-anchor="middle" fill="rgb(var(--color-accent))" font-size="11" font-weight="600">les deux sens</text>
    <text x="128" y="150" text-anchor="middle" fill="rgb(var(--color-accent))" font-size="11" font-weight="600">les deux sens</text>
    <circle cx="280" cy="60" r="32" fill="rgb(var(--color-accent))" fill-opacity="0.85" stroke="rgb(var(--color-border))" stroke-width="1" />
    <text x="280" y="66" text-anchor="middle" fill="rgb(var(--color-fill))" font-size="13" font-weight="700">Moi</text>
    <circle cx="500" cy="300" r="32" fill="rgb(var(--color-accent))" fill-opacity="0.6" stroke="rgb(var(--color-border))" stroke-width="1" />
    <text x="500" y="306" text-anchor="middle" fill="rgb(var(--color-fill))" font-size="13" font-weight="700">Toi</text>
    <circle cx="60" cy="300" r="36" fill="rgb(var(--color-accent))" fill-opacity="0.45" stroke="rgb(var(--color-border))" stroke-width="1" />
    <text x="60" y="306" text-anchor="middle" fill="rgb(var(--color-fill))" font-size="13" font-weight="700">L'entreprise</text>
    <text x="280" y="346" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="11" opacity="0.7">Le 1:1, c'est le côté du triangle que je peux faire vivre.</text>
  </svg>
  <figcaption style="text-align: center; font-size: 0.875rem; margin-top: 0.5rem;">
    Ma lecture du 1:1 : pas une ligne entre deux personnes, mais un triangle
    où les questions circulent dans les deux sens.
  </figcaption>
</figure>

Sur chacun des côtés, les questions circulent dans les deux sens. Entre le
managé et moi, j'ai des questions à lui poser — comment ça va, qu'est-ce qui
te bloque, qu'est-ce qui te fait du bien — et il en a à me poser aussi : ce
que j'attends de lui, ce que je peux faire pour lui, ce que je ne peux pas.
Le premier réflexe, c'est de ne faire circuler qu'un sens : le manager
questionne, le managé répond. Or la valeur du 1:1, c'est justement de
laisser la parole aller dans l'autre sens, et de prendre en compte le sommet
silencieux qui pèse sur les deux autres.

<!-- TODO(antoine): si le brouillon comportait un tableau de questions, le retranscrire ici. Je propose plutôt deux listes à puces (« du manager vers le managé » / « du managé vers le manager »), qui rendent mieux sur mobile qu'une grille large. -->

## Le triangle se retourne

> « TODO(antoine): mettre ici la citation du brouillon sur le triangle qui
> se retourne. »

Le triangle se retourne quand la situation vous place vous-même du côté de
celui qui subit. Un recrutement bloqué au-dessus de votre tête, un budget
qui n'arrive pas, une réorganisation qui tombe : vous n'êtes plus celui qui
décide, vous êtes celui qui relaie, qui absorbe ou qui explique. C'est
précisément ce que le managé, lui, vit en permanence au contact de
l'entreprise.

Se souvenir que je suis moi-même un sommet comme les autres change ma
posture. Quand un managé remonte quelque chose qui ressemble à un reproche
adressé à l'entreprise, ce n'est pas nécessairement un reproche adressé à
moi : c'est parfois le sommet « toi » qui crie vers le sommet « entreprise »,
en passant par moi. Mon rôle, c'est de ne pas le prendre pour moi, et de
faire le trait d'union.

## Les irritants

> « TODO(antoine): mettre ici la citation du brouillon sur les irritants. »

Un irritant, c'est cette petite chose qui gratte : une doc jamais mise à
jour, un rituel devenu inutile, une décision mal expliquée, une
sollicitation qui arrive au mauvais moment. Ce n'est pas un incident : ça ne
casse rien, ça use.

Le danger des irritants, c'est l'accumulation silencieuse. La personne les
mentionne une fois, en passant, en 1:1. Si rien ne se passe, elle les
mentionne une deuxième fois, une troisième, puis elle arrête : à quoi bon.
L'irritant n'a pas disparu, il est juste descendu un peu plus profond.

## Remonter un irritant doit servir à quelque chose

> « TODO(antoine): mettre ici la citation du brouillon sur la boucle de
> suivi. »

Pour qu'une remontée ne soit pas lettre morte, je m'oblige à une petite
boucle, qui recoupe ce que je décrivais dans l'article sur [le 1:1 et le
suivi individuel](/posts/engineering-manager-1-1-et-suivi-individuel) à
propos du journal de bord et de la [page de suivi
individuel](/posts/engineering-manager-1-1-et-suivi-individuel#le-template-de-page-de-suivi-individuel).

<figure>
  <svg
    viewBox="0 0 560 420"
    role="img"
    aria-label="La boucle de suivi d'un irritant : remonté en 1:1, noté dans la page de suivi, suivi d'une action ou d'une simple écoute, puis revu au 1:1 suivant avec la question « ça va mieux ? », pour aboutir à résolu, ou non résolu mais expliqué"
    style="width: 100%; max-width: 560px; height: auto; margin: 0 auto; display: block;"
  >
    <defs>
      <marker id="loop-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="rgb(var(--color-border))" />
      </marker>
    </defs>
    <title>La boucle de suivi d'un irritant</title>
    <rect x="56" y="50" width="200" height="62" rx="8" fill="none" stroke="rgb(var(--color-border))" stroke-width="1" />
    <text x="156" y="74" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="12" font-weight="700">1:1</text>
    <text x="156" y="94" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="11">l'irritant est remonté</text>
    <line x1="256" y1="81" x2="292" y2="81" stroke="rgb(var(--color-border))" stroke-width="2" marker-end="url(#loop-arrow)" />
    <rect x="300" y="50" width="200" height="62" rx="8" fill="none" stroke="rgb(var(--color-border))" stroke-width="1" />
    <text x="400" y="74" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="12" font-weight="700">Page de suivi</text>
    <text x="400" y="94" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="11">on le note pour y revenir</text>
    <line x1="400" y1="112" x2="400" y2="146" stroke="rgb(var(--color-border))" stroke-width="2" marker-end="url(#loop-arrow)" />
    <rect x="300" y="150" width="200" height="62" rx="8" fill="none" stroke="rgb(var(--color-border))" stroke-width="1" />
    <text x="400" y="174" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="12" font-weight="700">Action ou écoute</text>
    <text x="400" y="194" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="11">une réponse, même passive</text>
    <line x1="300" y1="181" x2="266" y2="181" stroke="rgb(var(--color-border))" stroke-width="2" marker-end="url(#loop-arrow)" />
    <rect x="56" y="150" width="200" height="62" rx="8" fill="none" stroke="rgb(var(--color-border))" stroke-width="1" />
    <text x="156" y="174" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="12" font-weight="700">1:1 suivant</text>
    <text x="156" y="194" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="11">« ça va mieux ? »</text>
    <line x1="156" y1="150" x2="156" y2="114" stroke="rgb(var(--color-border))" stroke-width="2" marker-end="url(#loop-arrow)" />
    <line x1="156" y1="212" x2="156" y2="248" stroke="rgb(var(--color-border))" stroke-width="2" marker-end="url(#loop-arrow)" />
    <text x="156" y="238" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="11" font-weight="600">Résolu ?</text>
    <polygon points="156,252 170,266 156,280 142,266" fill="rgb(var(--color-card))" stroke="rgb(var(--color-border))" stroke-width="1.5" />
    <line x1="170" y1="266" x2="226" y2="266" stroke="rgb(var(--color-accent))" stroke-width="2" marker-end="url(#loop-arrow)" />
    <rect x="230" y="232" width="150" height="68" rx="8" fill="rgb(var(--color-accent))" fill-opacity="0.85" />
    <text x="305" y="258" text-anchor="middle" fill="rgb(var(--color-fill))" font-size="12" font-weight="700">Résolu ✓</text>
    <text x="305" y="278" text-anchor="middle" fill="rgb(var(--color-fill))" font-size="10">on peut le refermer</text>
    <path d="M156 280 L156 310 L230 310 L230 330" fill="none" stroke="rgb(var(--color-border))" stroke-width="2" marker-end="url(#loop-arrow)" />
    <rect x="20" y="330" width="272" height="70" rx="8" fill="none" stroke="rgb(var(--color-border))" stroke-width="1.5" />
    <text x="156" y="356" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="12" font-weight="700">Non résolu, mais expliqué</text>
    <text x="156" y="376" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="11">pourquoi ça ne peut pas changer — rien n'est occulté</text>
  </svg>
  <figcaption style="text-align: center; font-size: 0.875rem; margin-top: 0.5rem;">
    Une remontée n'est jamais lettre morte : elle est notée, suivie, revue.
    Au bout, résolu ou rendu — expliqué.
  </figcaption>
</figure>

Pas à pas :

1. **En 1:1, la personne remonte l'irritant.** Mon premier travail, c'est
   d'écouter : ne pas plaider, ne pas justifier tout de suite, ne pas
   répondre « oui mais ». Juste accueillir.
2. **Je le note dans la page de suivi.** Une ligne, une date, une phrase
   factuelle. C'est ce geste qui me permet d'en reparler, et de percevoir,
   à la longue, quand l'irritant revient sous des formes différentes.
3. **Une action, ou une simple écoute.** Si une action est possible, je la
   porte ou je la confie, et je le dis. Si rien n'est possible, l'écoute
   n'est pas une non-réponse : c'est une réponse, à condition qu'elle soit
   assumée et qu'elle ait une suite.
4. **Au 1:1 suivant, j'y reviens :** « ça va mieux ? ». C'est ce retour qui
   fait que la remontée a servi. Sans lui, tout le reste s'évanouit.
5. **Résolu, ou non résolu mais expliqué.** Si c'est résolu, on referme. Si
   ça ne l'est pas, j'explique pourquoi : décision hors de mon ressort,
   calendrier, arbitrage qui ne passera pas tout de suite.

Mon principe, si je devais le résumer : **un irritant, on le règle ou on
l'explique.** Un irritant non résolu mais expliqué se supporte très bien ;
un irritant non résolu et ignoré s'enkyste.

## Et la suite ?

Il reste d'autres aspects de la relation et de la remontée d'informations
que je n'ai pas abordés ici. Si vous voulez que je précise un point ou que
j'aborde un thème en particulier, mes réseaux sont accessibles depuis ce
blog : écrivez-moi, je serai ravi de vous lire.

Le prochain épisode portera sur TODO(antoine): annoncer le sujet de
l'article 8. Comme toujours, vous pouvez retrouver l'ensemble de la série
via le tag [engineering-management](/tags/engineering-management).

<!-- TODO(antoine): phrase de mention de l'image de couverture, selon la piste retenue. Ne pas télécharger sans accord. -->
