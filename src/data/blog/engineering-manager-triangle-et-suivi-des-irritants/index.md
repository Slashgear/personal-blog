---
title: "Engineering manager : le triangle et le suivi des irritants"
description: >
  Septième article de la série sur mon retour d'expérience en tant
  qu'engineering manager. Ce billet porte sur le triangle que forme la
  relation de management (moi, toi, l'entreprise) et sur le suivi des
  irritants remontés en 1:1, pour qu'une remontée serve toujours à quelque
  chose.
pubDatetime: 2026-10-07
ogImage: "./cover.webp"
language: fr
tags:
  - engineering-management
---

C'est le septième article de ma série sur ce que le rôle d'engineering
manager m'a appris. Comme pour les épisodes précédents, ce qui suit n'est ni
une méthode ni une vérité générale : c'est un retour d'expérience personnel,
une poignée d'idées et de principes que je me suis forgés, et de ce qu'ils
m'apportent au quotidien.

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

> « Un 1:1, ce n'est pas une ligne entre deux personnes : c'est un triangle,
> et le troisième sommet — l'entreprise — est toujours dans la pièce, même
> quand personne ne le nomme. » (moi, en résumant ma lecture du 1:1)

Quand j'ai commencé à manager, je voyais la relation avec chaque membre de
l'équipe comme une ligne : deux personnes en face à face, un 1:1. Avec
l'expérience, je ne la lis plus comme une ligne mais comme un triangle, à
trois sommets : **moi**, **toi**, et **l'entreprise**. Le troisième sommet
est toujours dans la pièce, même quand personne ne le nomme.

<figure>
  <svg
    viewBox="0 0 580 380"
    role="img"
    aria-label="Le triangle du management : trois sommets, Moi en haut, Toi à droite, L'entreprise à gauche, reliés par des flèches doubles indiquant que les questions circulent dans les deux sens, du manager vers le managé et du managé vers le manager"
    style="width: 100%; max-width: 580px; height: auto; margin: 0 auto; display: block;"
  >
    <defs>
      <marker id="tri-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="rgb(var(--color-accent))" />
      </marker>
    </defs>
    <title>Le triangle Moi / Toi / L'entreprise</title>
    <polygon
      points="290,65 510,315 70,315"
      fill="rgb(var(--color-accent))"
      fill-opacity="0.06"
      stroke="rgb(var(--color-border))"
      stroke-width="1.5"
    />
    <line x1="128" y1="315" x2="466" y2="315" stroke="rgb(var(--color-border))" stroke-width="1.5" stroke-dasharray="5 4" />
    <line x1="319" y1="98" x2="481" y2="282" stroke="rgb(var(--color-accent))" stroke-width="2.5" marker-start="url(#tri-arrow)" marker-end="url(#tri-arrow)" />
    <line x1="261" y1="98" x2="108" y2="272" stroke="rgb(var(--color-accent))" stroke-width="2.5" marker-start="url(#tri-arrow)" marker-end="url(#tri-arrow)" />
    <text x="290" y="200" text-anchor="middle" fill="rgb(var(--color-accent))" font-size="14" font-weight="600">les deux sens</text>
    <circle cx="290" cy="65" r="44" fill="rgb(var(--color-accent))" fill-opacity="0.85" stroke="rgb(var(--color-border))" stroke-width="1" />
    <text x="290" y="72" text-anchor="middle" fill="rgb(var(--color-fill))" font-size="19" font-weight="700">Moi</text>
    <circle cx="510" cy="315" r="44" fill="rgb(var(--color-accent))" fill-opacity="0.6" stroke="rgb(var(--color-border))" stroke-width="1" />
    <text x="510" y="322" text-anchor="middle" fill="rgb(var(--color-fill))" font-size="19" font-weight="700">Toi</text>
    <circle cx="70" cy="315" r="58" fill="rgb(var(--color-accent))" fill-opacity="0.45" stroke="rgb(var(--color-border))" stroke-width="1" />
    <text x="70" y="308" text-anchor="middle" fill="rgb(var(--color-fill))" font-size="15" font-weight="700">
      <tspan x="70" dy="0">L'</tspan>
      <tspan x="70" dy="18">entreprise</tspan>
    </text>
  </svg>
  <figcaption style="text-align: center; font-size: 0.875rem; margin-top: 0.5rem;">
    Ma lecture du 1:1 : pas une ligne entre deux personnes, mais un triangle
    où les questions circulent dans les deux sens.
  </figcaption>
</figure>

Sur chacun des côtés, les questions circulent dans les deux sens.

Du manager vers le managé, des questions à lui poser en 1:1 :

- comment ça va, vraiment ;
- qu'est-ce qui te bloque ;
- qu'est-ce qui te fait du bien.

Du managé vers le manager, ce qu'il a le droit de me demander :

- ce que j'attends de lui ;
- ce que je peux faire pour lui ;
- ce que je ne peux pas.

Le premier réflexe, c'est de ne faire circuler qu'un sens : le manager
questionne, le managé répond. Or la valeur du 1:1, c'est justement de
laisser la parole aller dans l'autre sens, et de prendre en compte le sommet
silencieux qui pèse sur les deux autres.

## Le triangle se retourne

> « Quand le recrutement bloque au-dessus de ma tête, je redeviens un managé
> comme les autres : je relaie, j'absorbe, j'explique. » (moi)

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

> « Un irritant n'est pas un incident : ça ne casse rien, ça use. Et si
> personne n'y revient, on finit par arrêter de le dire, pas d'en souffrir. »
> (moi, en résumant ce que j'observe en 1:1)

Un irritant, c'est cette petite chose qui gratte : une doc jamais mise à
jour, un rituel devenu inutile, une décision mal expliquée, une
sollicitation qui arrive au mauvais moment. Ce n'est pas un incident : ça ne
casse rien, ça use.

Le danger des irritants, c'est l'accumulation silencieuse. La personne les
mentionne une fois, en passant, en 1:1. Si rien ne se passe, elle les
mentionne une deuxième fois, une troisième, puis elle arrête : à quoi bon.
L'irritant n'a pas disparu, il est juste descendu un peu plus profond.

## Remonter un irritant doit servir à quelque chose

> « Le problème d'un irritant, ce n'est pas la gêne qu'il provoque : c'est
> le silence qui s'installe quand on finit par ne plus le remonter. » (moi,
> en résumant ce que je redoute le plus en 1:1)

Pour qu'une remontée ne soit pas lettre morte, je m'oblige à une petite
boucle, qui recoupe ce que je décrivais dans l'article sur [le 1:1 et le
suivi individuel](/posts/engineering-manager-1-1-et-suivi-individuel) à
propos du journal de bord et de la [page de suivi
individuel](/posts/engineering-manager-1-1-et-suivi-individuel#le-template-de-page-de-suivi-individuel).

<figure>
  <svg
    viewBox="0 0 600 470"
    role="img"
    aria-label="La boucle de suivi d'un irritant : remonté en 1:1, noté dans la page de suivi, suivi d'une action ou d'une simple écoute, puis revu au 1:1 suivant avec la question « ça va mieux ? », pour aboutir à résolu, ou non résolu mais expliqué"
    style="width: 100%; max-width: 600px; height: auto; margin: 0 auto; display: block;"
  >
    <defs>
      <marker id="loop-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="rgb(var(--color-border))" />
      </marker>
    </defs>
    <title>La boucle de suivi d'un irritant</title>
    <rect x="40" y="50" width="230" height="68" rx="8" fill="none" stroke="rgb(var(--color-border))" stroke-width="1" />
    <text x="155" y="78" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="14" font-weight="700">1:1</text>
    <text x="155" y="100" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="13">l'irritant est remonté</text>
    <line x1="270" y1="84" x2="326" y2="84" stroke="rgb(var(--color-border))" stroke-width="2" marker-end="url(#loop-arrow)" />
    <rect x="330" y="50" width="230" height="68" rx="8" fill="none" stroke="rgb(var(--color-border))" stroke-width="1" />
    <text x="445" y="78" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="14" font-weight="700">Page de suivi</text>
    <text x="445" y="100" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="13">on le note pour y revenir</text>
    <line x1="445" y1="118" x2="445" y2="156" stroke="rgb(var(--color-border))" stroke-width="2" marker-end="url(#loop-arrow)" />
    <rect x="330" y="158" width="230" height="68" rx="8" fill="none" stroke="rgb(var(--color-border))" stroke-width="1" />
    <text x="445" y="186" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="14" font-weight="700">Action ou écoute</text>
    <text x="445" y="208" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="13">une réponse, même passive</text>
    <line x1="330" y1="192" x2="274" y2="192" stroke="rgb(var(--color-border))" stroke-width="2" marker-end="url(#loop-arrow)" />
    <rect x="40" y="158" width="230" height="68" rx="8" fill="none" stroke="rgb(var(--color-border))" stroke-width="1" />
    <text x="155" y="186" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="14" font-weight="700">1:1 suivant</text>
    <text x="155" y="208" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="13">« ça va mieux ? »</text>
    <line x1="155" y1="158" x2="155" y2="122" stroke="rgb(var(--color-border))" stroke-width="2" marker-end="url(#loop-arrow)" />
    <line x1="155" y1="226" x2="155" y2="258" stroke="rgb(var(--color-border))" stroke-width="2" marker-end="url(#loop-arrow)" />
    <text x="155" y="250" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="13" font-weight="600">Résolu ?</text>
    <polygon points="155,268 170,283 155,298 140,283" fill="rgb(var(--color-card))" stroke="rgb(var(--color-border))" stroke-width="1.5" />
    <line x1="170" y1="283" x2="241" y2="283" stroke="rgb(var(--color-accent))" stroke-width="2" marker-end="url(#loop-arrow)" />
    <rect x="245" y="249" width="170" height="68" rx="8" fill="rgb(var(--color-accent))" fill-opacity="0.85" />
    <text x="330" y="278" text-anchor="middle" fill="rgb(var(--color-fill))" font-size="14" font-weight="700">Résolu ✓</text>
    <text x="330" y="300" text-anchor="middle" fill="rgb(var(--color-fill))" font-size="12">on peut le refermer</text>
    <path d="M155 298 L155 335 L220 335 L220 360" fill="none" stroke="rgb(var(--color-border))" stroke-width="2" marker-end="url(#loop-arrow)" />
    <rect x="20" y="360" width="400" height="100" rx="8" fill="none" stroke="rgb(var(--color-border))" stroke-width="1.5" />
    <text x="220" y="390" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="14" font-weight="700">Non résolu, mais expliqué</text>
    <text x="220" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="12">
      <tspan x="220" y="412">pourquoi ça ne peut pas changer</tspan>
      <tspan x="220" y="430">— rien n'est occulté</tspan>
    </text>
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

Comme toujours, vous pouvez retrouver l'ensemble de la série via le tag
[engineering-management](/tags/engineering-management).

_Photo de couverture : [Sepehr Hashemi](https://unsplash.com/fr/@sipbikardi) sur
[Unsplash](https://unsplash.com/fr/photos/une-table-et-deux-chaises-devant-une-fenetre-8J5YU29ENJo)._
