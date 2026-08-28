---
title: "Engineering manager : le 1:1 et le suivi individuel"
description: |
  Deuxième article de la série sur mon retour d'expérience en tant
  qu'engineering manager. Ce billet porte sur le 1:1 et le suivi individuel :
  à quoi sert ce temps, comment le préparer, et ce que des mentors et
  collègues m'ont transmis sur le sujet.
pubDatetime: 2026-08-27
language: fr
ogImage: "./cover.webp"
tags:
  - engineering-management
---

C'est le deuxième article de ma série sur ce que le rôle d'engineering
manager m'a appris. Comme pour le premier épisode, ce qui suit n'est ni une
méthode ni une vérité générale : c'est un retour d'expérience personnel,
structuré autour des citations et des principes que des personnes qui ont
compté dans mon parcours m'ont transmis, et de ce qu'ils m'apportent au
quotidien.

Le premier épisode portait sur le [rôle et la posture
d'engineering manager](/posts/engineering-manager-role-et-posture) ; si vous
ne l'avez pas lu, c'est une bonne entrée en matière avant celui-ci. Vous
pouvez aussi retrouver tous les articles de la série sur la page du tag
[engineering-management](/tags/engineering-management).

Ce billet-ci se concentre sur le 1:1 et le suivi individuel : ce temps
dédié, régulier, en tête-à-tête avec chaque personne de l'équipe, et tout ce
qui se joue autour pour accompagner les individus dans la durée.

## Le paradoxe de la porte ouverte

> « Ma porte est toujours ouverte. » (une phrase que j'ai entendue de la
> bouche de plusieurs managers, que je ne citerai pas ici)

Annoncer que sa porte est ouverte, ce n'est pas si généreux qu'il n'y
paraît. Au fond, cela ne fait qu'ériger en principe le « venez me déranger
quand vous en avez besoin » : la charge de provoquer l'échange repose
entièrement sur le managé. Dans une petite équipe, ça peut suffire. Passé
une certaine taille, ça ne tient plus.

En cas d'urgence ou de situation qui le réclame, votre porte doit
évidemment rester ouverte. Mais une disponibilité permanente n'est pas un
dispositif de suivi : c'est un modèle qui ne passe pas à l'échelle, et qui
laisse de côté ceux qui ne viennent jamais frapper.

La réponse, c'est d'instaurer un rendez-vous régulier avec chaque personne
de l'équipe : un temps dédié, qui vous revient d'initier, pour échanger,
prendre la température et vous donner mutuellement du feedback.

<figure>
  <svg
    viewBox="0 0 520 320"
    role="img"
    aria-label="À gauche, des sollicitations dispersées tout au long de la semaine ; à droite, les mêmes échanges regroupés dans quelques créneaux réguliers"
    style="width: 100%; max-width: 560px; height: auto; margin: 0 auto; display: block;"
  >
    <title>Porte ouverte contre rendez-vous réguliers</title>
    <text x="40" y="34" fill="rgb(var(--color-text-base))" font-size="13" font-weight="700">Porte ouverte</text>
    <rect x="40" y="46" width="440" height="60" fill="none" stroke="rgb(var(--color-border))" stroke-width="1" rx="3" />
    <g fill="rgb(var(--color-accent))" fill-opacity="0.85">
      <rect x="58" y="78" width="4" height="24" /><rect x="74" y="66" width="4" height="36" />
      <rect x="103" y="82" width="4" height="20" /><rect x="131" y="58" width="4" height="44" />
      <rect x="149" y="80" width="4" height="22" /><rect x="187" y="70" width="4" height="32" />
      <rect x="223" y="62" width="4" height="40" /><rect x="256" y="84" width="4" height="18" />
      <rect x="288" y="72" width="4" height="30" /><rect x="317" y="60" width="4" height="42" />
      <rect x="349" y="82" width="4" height="20" /><rect x="372" y="68" width="4" height="34" />
      <rect x="404" y="78" width="4" height="24" /><rect x="431" y="64" width="4" height="38" />
      <rect x="455" y="80" width="4" height="22" />
    </g>
    <text x="40" y="126" fill="rgb(var(--color-text-base))" font-size="11" opacity="0.7">Sollicitations dispersées, en continu — la charge repose sur le managé</text>
    <path d="M250 148 l0 26 M242 166 l8 8 l8 -8" fill="none" stroke="rgb(var(--color-border))" stroke-width="1.5" />
    <text x="266" y="170" fill="rgb(var(--color-text-base))" font-size="11" font-style="italic">on canalise</text>
    <text x="40" y="212" fill="rgb(var(--color-text-base))" font-size="13" font-weight="700">Rendez-vous réguliers</text>
    <rect x="40" y="224" width="440" height="60" fill="none" stroke="rgb(var(--color-border))" stroke-width="1" rx="3" />
    <g fill="rgb(var(--color-accent))" fill-opacity="0.85">
      <rect x="86" y="234" width="56" height="40" rx="3" />
      <rect x="232" y="234" width="56" height="40" rx="3" />
      <rect x="378" y="234" width="56" height="40" rx="3" />
    </g>
    <g fill="rgb(var(--color-fill))" font-size="10" font-weight="600" text-anchor="middle">
      <text x="114" y="258">1:1</text><text x="260" y="258">1:1</text><text x="406" y="258">1:1</text>
    </g>
    <text x="40" y="304" fill="rgb(var(--color-text-base))" font-size="11" opacity="0.7">Mêmes échanges, regroupés dans des créneaux dédiés et prévisibles</text>
  </svg>
  <figcaption style="text-align: center; font-size: 0.875rem; margin-top: 0.5rem;">
    La porte ouverte laisse les sollicitations arriver n'importe quand ; le
    1:1 régulier les rassemble dans un temps prévu pour ça.
  </figcaption>
</figure>

## Une régularité par individu

> « Tu veux qu'on se voie à quelle régularité ? »
> ([Florent Dubost](https://www.linkedin.com/in/florent-dubost-914346181/),
> mon manager pendant plusieurs années)

Là encore, tout est affaire d'individu. Chacun a besoin de voir son manager
à une fréquence et pour une durée qui lui sont propres. Décréter « je vois
tout le monde trente minutes toutes les deux semaines », c'est la garantie
de ne répondre au besoin de personne : certains étoufferont, d'autres
tourneront en rond faute de matière.

Cette cadence se négocie donc avec chaque managé. Elle n'a rien de figé et
peut évoluer au fil du temps, mais une fois posée, elle devient un
engagement : on ne l'annule pas, on la décale.

Concrètement, je recommande de fixer explicitement, en échangeant avec la
personne, la fréquence et la durée du 1:1, puis de les consigner quelque
part. Un accord tacite se perd ; un accord écrit se relit et se révise
quand le besoin change.

## Le cas des alternants, stagiaires et profils juniors

> « Je ne sais pas si je suis suffisamment à l'aise pour prendre un
> alternant… » (un collègue, en pleine crise de confiance)

Le suivi des profils en apprentissage fait souvent peur : celle de mal s'en
occuper, ou celle d'être sollicité en permanence. J'ai eu la chance de
donner des cours, et l'expérience d'une classe de quarante étudiants qui
vous demandent chacun à leur tour « il faut faire quoi, monsieur ? » forge
assez vite l'envie de se doter d'une stratégie.

Comme pour n'importe quel managé, la réponse passe par un suivi régulier,
mais nettement plus soutenu. Ce que j'ai appliqué le plus souvent : deux
créneaux d'une heure par semaine, bloqués dans le calendrier, généralement
un le mardi et un le jeudi, pendant lesquels je leur consacre du temps pour
avancer ensemble sur leur sujet. Ces points réguliers créent des
respirations dans la semaine : la personne sait qu'un moment est prévu pour
poser ses questions et ses blocages, ce qui évite les sollicitations
permanentes. C'est aussi ce qui rend possible l'accompagnement de plusieurs
apprenants en parallèle : votre capacité, c'est le temps que vous êtes prêt
à bloquer chaque semaine.

Un autre réflexe utile : confier deux sujets à la fois. Le premier, « l'os »,
est le sujet difficile, celui sur lequel la personne peut rester coincée.
Le second est un sujet sans blocage connu, sur lequel elle peut continuer à
avancer librement quand l'os résiste. Elle n'est jamais complètement à
l'arrêt, et vous n'êtes pas le seul goulot d'étranglement de sa semaine.

L'arrivée d'un alternant ou d'un stagiaire, ça se prépare. J'y reviendrai
plus en détail dans un article dédié à l'onboarding, l'offboarding et le
recrutement.

![Jules Poissonnet et moi sur scène, micro en main, lors d'un talk](./lyonJS39.webp)

_Avec Jules Poissonnet, mon ancien alternant, sur la scène de LyonJS 100
pour un talk sur les stratégies de test. Accompagner un profil junior, c'est
aussi l'amener jusqu'à partager devant une salle._

## Des besoins qui ne s'équilibrent pas

> « Il est normal que certaines personnes de vos équipes nécessitent un
> accompagnement plus fort que d'autres. » (Sarah Drasner, dans le livre
> [cité dans l'article
> précédent](/posts/engineering-manager-role-et-posture))

Ça peut être frustrant quand on débute dans le rôle, mais avec l'expérience,
ça devient une évidence. Chaque personne de l'équipe est différente, et
l'accompagnement que vous lui apportez n'est ni le même ni comparable d'un
individu à l'autre. Oui, vous aurez peut-être quelqu'un qui occupera à lui
seul la moitié de votre temps de management sur une semaine. Avec le recul,
ça ne me choque plus.

Et tout cela évolue. Une personne que vous suivez de loin à un moment donné
sera peut-être bien plus demandeuse l'année suivante. Rien n'est
nécessairement corrélé à l'expérience ou à l'autonomie du managé : un profil
junior vous mobilisera souvent davantage, mais vous croiserez aussi des
juniors qui gagnent très vite en autonomie et se jettent dans les ronces
avec appétit pour apprendre. Dans ce cas, laissez-les faire.

Ne soyez donc pas surpris que les besoins soient déséquilibrés dans
l'équipe. Cherchez l'équité, pas l'égalité : donnez plus à celles et ceux
qui en ont le plus besoin. C'est à vous de vous adapter à l'équipe, pas
l'inverse.

<figure>
  <svg
    viewBox="0 0 520 260"
    role="img"
    aria-label="Part du temps de management consacré à chaque personne de l'équipe sur une semaine : les barres sont très inégales, de 50 % pour l'une à 5 % pour une autre"
    style="width: 100%; max-width: 560px; height: auto; margin: 0 auto; display: block;"
  >
    <title>Temps de management par personne, sur une semaine type</title>
    <g stroke="rgb(var(--color-border))" stroke-width="1" stroke-opacity="0.35">
      <line x1="240" y1="24" x2="240" y2="232" />
      <line x1="380" y1="24" x2="380" y2="232" />
    </g>
    <g fill="rgb(var(--color-text-base))" font-size="10" opacity="0.6" text-anchor="middle">
      <text x="240" y="248">25 %</text>
      <text x="380" y="248">50 %</text>
    </g>
    <g fill="rgb(var(--color-text-base))" font-size="12" text-anchor="end">
      <text x="92" y="46">Personne A</text>
      <text x="92" y="86">Personne B</text>
      <text x="92" y="126">Personne C</text>
      <text x="92" y="166">Personne D</text>
      <text x="92" y="206">Personne E</text>
    </g>
    <g fill="rgb(var(--color-accent))" fill-opacity="0.85">
      <rect x="100" y="30" width="280" height="22" rx="2" />
      <rect x="100" y="70" width="112" height="22" rx="2" />
      <rect x="100" y="110" width="84" height="22" rx="2" />
      <rect x="100" y="150" width="56" height="22" rx="2" />
      <rect x="100" y="190" width="28" height="22" rx="2" />
    </g>
    <g fill="rgb(var(--color-text-base))" font-size="11" font-weight="600">
      <text x="390" y="46">50 %</text>
      <text x="222" y="86">20 %</text>
      <text x="194" y="126">15 %</text>
      <text x="166" y="166">10 %</text>
      <text x="138" y="206">5 %</text>
    </g>
    <line x1="100" y1="24" x2="100" y2="232" stroke="rgb(var(--color-border))" stroke-width="1" />
  </svg>
  <figcaption style="text-align: center; font-size: 0.875rem; margin-top: 0.5rem;">
    Un exemple : sur une semaine, une personne peut mobiliser la moitié de
    votre temps de management, une autre à peine 5 %. C'est normal.
  </figcaption>
</figure>

## Le syndrome du sauveteur compulsif

> « Des fois j'y arrive, souvent j'me trompe, donc j'recommence, et puis
> j'apprends. » (Orelsan — et je citerai qui je veux, hein)

Quand on reçoit la responsabilité de manager, on a envie de protéger son
équipe, de lui éviter les erreurs dans lesquelles on est soi-même tombé.
L'intention est louable, mais elle prive l'équipe de l'essentiel de son
apprentissage. L'image que je me fais du rôle, c'est plutôt : « je dois
laisser mon équipe échouer pour qu'elle progresse. » C'est frustrant.

Certains managers se diront « si je le fais moi-même, j'en ai pour dix
minutes ». En réalité, vous en avez pour dix minutes _plus_ vos années
d'expérience. La personne que vous managez, elle, n'a pas ces années : elle
est en train de les construire. Laissez-la échouer.

Vous allez me trouver vilain, mais il m'est arrivé de créer sciemment des
situations où je « soulève légèrement le tapis » pour qu'une personne de
l'équipe s'y prenne les pieds. Rassurez-vous, c'est une image : mon équipe
n'est pas sponsorisée par les crèmes à l'arnica. Provoquer des situations
qui font grandir l'équipe fait partie du rôle. C'est dans une certaine zone
d'inconfort que vos managés apprennent et progressent, pas en refaisant ce
qu'ils maîtrisent déjà.

Votre alarme interne doit évidemment continuer de sonner : il s'agit
d'éviter que l'équipe échoue trop fort, ou se fasse vraiment mal. Pour
distinguer l'incident formateur du vrai problème, je me sers d'un test
simple : si je m'imagine y repenser dans deux ans et que je le trouve
encore grave à ce moment-là, alors il est grave aujourd'hui et je dois
intervenir. Sinon, je laisse faire.

## Étaler ses 1:1 dans la semaine

Qu'il s'agisse des 1:1 de vos managés ou de vos apprenants, placez-les dans
un agenda partagé. Pourquoi pas un agenda dédié, avec sa propre couleur,
pour visualiser d'un coup d'œil comment vos entretiens se répartissent. Le
but est d'éviter la journée entièrement remplie de 1:1. Certains préfèrent
tout enchaîner ; pour moi, ce serait un vrai cauchemar.

Un 1:1 demande une écoute pleine et entière. En enchaîner cinq dans la même
journée, c'est arriver au dernier vidé de son attention, à écouter à moitié
la personne qui n'y est pour rien si elle passe en fin de liste. Chaque
entretien laisse aussi du travail derrière lui : une note à prendre, une
relance à faire, un sujet difficile à digérer avant de pouvoir passer à
autre chose. Il faut un peu d'air entre deux pour ça. Enfin, espacer les
1:1 leur laisse la souplesse de déborder : si l'un a besoin d'un quart
d'heure de plus, il ne fait pas s'effondrer les quatre suivants.

<figure>
  <svg
    viewBox="0 0 520 340"
    role="img"
    aria-label="Semaine type d'un manager : les 1:1 sont répartis un par jour, du lundi au vendredi, entre les réunions d'équipe"
    style="width: 100%; max-width: 560px; height: auto; margin: 0 auto; display: block;"
  >
    <title>Répartition des 1:1 sur la semaine</title>
    <!-- jours -->
    <text x="105" y="22" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="13" font-weight="600">Lun</text>
    <text x="193" y="22" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="13" font-weight="600">Mar</text>
    <text x="281" y="22" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="13" font-weight="600">Mer</text>
    <text x="369" y="22" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="13" font-weight="600">Jeu</text>
    <text x="457" y="22" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="13" font-weight="600">Ven</text>
    <!-- heures -->
    <text x="48" y="44" text-anchor="end" fill="rgb(var(--color-text-base))" font-size="11" opacity="0.7">9h</text>
    <text x="48" y="104" text-anchor="end" fill="rgb(var(--color-text-base))" font-size="11" opacity="0.7">11h</text>
    <text x="48" y="164" text-anchor="end" fill="rgb(var(--color-text-base))" font-size="11" opacity="0.7">13h</text>
    <text x="48" y="224" text-anchor="end" fill="rgb(var(--color-text-base))" font-size="11" opacity="0.7">15h</text>
    <text x="48" y="284" text-anchor="end" fill="rgb(var(--color-text-base))" font-size="11" opacity="0.7">17h</text>
    <!-- grille -->
    <rect x="56" y="32" width="440" height="270" fill="none" stroke="rgb(var(--color-border))" stroke-width="1" />
    <line x1="144" y1="32" x2="144" y2="302" stroke="rgb(var(--color-border))" stroke-width="1" />
    <line x1="232" y1="32" x2="232" y2="302" stroke="rgb(var(--color-border))" stroke-width="1" />
    <line x1="320" y1="32" x2="320" y2="302" stroke="rgb(var(--color-border))" stroke-width="1" />
    <line x1="408" y1="32" x2="408" y2="302" stroke="rgb(var(--color-border))" stroke-width="1" />
    <!-- réunions d'équipe (daily + points collectifs) -->
    <g fill="rgb(var(--color-border))" fill-opacity="0.55">
      <rect x="60" y="34" width="80" height="14" rx="2" />
      <rect x="148" y="34" width="80" height="14" rx="2" />
      <rect x="236" y="34" width="80" height="14" rx="2" />
      <rect x="324" y="34" width="80" height="14" rx="2" />
      <rect x="412" y="34" width="80" height="14" rx="2" />
      <rect x="324" y="205" width="80" height="42" rx="2" />
      <rect x="412" y="235" width="80" height="42" rx="2" />
    </g>
    <text x="364" y="230" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="10">Point équipe</text>
    <text x="452" y="260" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="10">Rétro</text>
    <!-- 1:1, un par jour, étalés -->
    <g fill="rgb(var(--color-accent))" fill-opacity="0.85">
      <rect x="60" y="95" width="80" height="30" rx="3" />
      <rect x="148" y="185" width="80" height="30" rx="3" />
      <rect x="236" y="65" width="80" height="30" rx="3" />
      <rect x="324" y="140" width="80" height="30" rx="3" />
      <rect x="412" y="95" width="80" height="30" rx="3" />
    </g>
    <g fill="rgb(var(--color-fill))" font-size="10" font-weight="600" text-anchor="middle">
      <text x="100" y="114">1:1</text>
      <text x="188" y="204">1:1</text>
      <text x="276" y="84">1:1</text>
      <text x="364" y="159">1:1</text>
      <text x="452" y="114">1:1</text>
    </g>
    <!-- légende -->
    <rect x="56" y="316" width="14" height="12" rx="2" fill="rgb(var(--color-accent))" fill-opacity="0.85" />
    <text x="76" y="326" fill="rgb(var(--color-text-base))" font-size="11">1:1 individuel</text>
    <rect x="196" y="316" width="14" height="12" rx="2" fill="rgb(var(--color-border))" fill-opacity="0.55" />
    <text x="216" y="326" fill="rgb(var(--color-text-base))" font-size="11">Réunions d'équipe</text>
  </svg>
  <figcaption style="text-align: center; font-size: 0.875rem; margin-top: 0.5rem;">
    Une semaine type : un 1:1 par jour, à des horaires différents, plutôt
    qu'une demi-journée entière d'entretiens enchaînés.
  </figcaption>
</figure>

## Tenir un journal de bord

> « Journal de bord : mer calme, embarquement de 4 passagers, vent NE
> force 3… » (pas la citation d'un mentor cette fois, juste l'image qui m'a
> servi de modèle)

L'image en tête de cet article est une double page du livre de bord de la
frégate néerlandaise _Medea_, tenu en 1786 par son commandant A.A. Buyskes
([Nationaal Archief](https://www.nationaalarchief.nl/), domaine public). On y
voit des profils de côtes dessinés à main levée et le relevé quotidien de la
navigation : cap, vent, mouillages, incidents. Des siècles avant nos outils
de suivi, la pratique était déjà là — noter chaque jour, factuellement, ce
qu'on observe, pour pouvoir s'y reporter plus tard. C'est exactement l'usage
que je vous propose d'en faire avec votre équipe.

Avant même de parler du document qui me sert à structurer le suivi de mes
managés, il y a un préalable : disposer quelque part d'un espace de notes.
Vous observez votre équipe en continu, dans ses réussites comme dans ses
ratés, à l'échelle collective comme individuelle. Avec une petite équipe, on
a vite envie de s'en remettre à sa mémoire ; elle finit toujours par être
débordée.

Je conseille donc de tenir un journal de bord : un endroit où consigner les
événements de la vie de l'équipe. Il vous est strictement personnel, et sa
seule contrainte est de vous obliger à rester factuel.

On peut y noter la mise en production d'une fonctionnalité, un incident, la
réussite marquante d'une personne, une communication qui est mal passée, un
oubli de standup, ou encore une période où quelqu'un s'est visiblement
beaucoup investi. Relus quelques semaines plus tard, au moment d'un 1:1 ou
d'un point de carrière, ces faits datés valent bien mieux qu'une impression
générale.

Je vous montrerais bien le mien, mais comme je l'ai dit, il est privé. À
vous de faire le vôtre.

<figure>
  <svg
    viewBox="0 0 520 360"
    role="img"
    aria-label="Page d'un journal de bord de manager avec des entrées datées et factuelles : mise en production, incident, investissement d'une personne, communication maladroite, oubli récurrent"
    style="width: 100%; max-width: 560px; height: auto; margin: 0 auto; display: block;"
  >
    <title>Exemple de journal de bord</title>
    <rect x="24" y="16" width="472" height="328" rx="4" fill="rgb(var(--color-card))" stroke="rgb(var(--color-border))" stroke-width="1" />
    <line x1="72" y1="16" x2="72" y2="344" stroke="rgb(var(--color-accent))" stroke-width="1.5" stroke-opacity="0.6" />
    <text x="88" y="46" fill="rgb(var(--color-text-base))" font-size="15" font-weight="700">Journal de bord</text>
    <g stroke="rgb(var(--color-border))" stroke-width="1" stroke-opacity="0.5">
      <line x1="72" y1="70" x2="480" y2="70" />
      <line x1="72" y1="116" x2="480" y2="116" />
      <line x1="72" y1="162" x2="480" y2="162" />
      <line x1="72" y1="208" x2="480" y2="208" />
      <line x1="72" y1="254" x2="480" y2="254" />
      <line x1="72" y1="300" x2="480" y2="300" />
    </g>
    <g fill="rgb(var(--color-accent))" font-size="11" font-weight="700" text-anchor="end">
      <text x="66" y="90">12/03</text>
      <text x="66" y="136">18/03</text>
      <text x="66" y="182">21/03</text>
      <text x="66" y="228">26/03</text>
      <text x="66" y="274">02/04</text>
    </g>
    <g fill="rgb(var(--color-text-base))" font-size="12">
      <text x="84" y="90">Mise en prod de la recherche v2, sans accroc</text>
      <text x="84" y="136">Incident paiement, ~40 min. Bien géré par C.</text>
      <text x="84" y="182">A. a porté seul·e la migration sur 3 semaines</text>
      <text x="84" y="228">Standup : remarque sèche sur l'équipe voisine</text>
      <text x="84" y="274">R. a manqué le point client — 2e fois ce mois-ci</text>
    </g>
    <text x="84" y="322" fill="rgb(var(--color-text-base))" font-size="12" opacity="0.5">…</text>
  </svg>
  <figcaption style="text-align: center; font-size: 0.875rem; margin-top: 0.5rem;">
    Des entrées courtes, datées et factuelles : ni interprétation ni
    jugement, juste ce qui s'est passé.
  </figcaption>
</figure>

## Le brag document : se souvenir de ses réussites

> « Si on me demande quels sont mes succès de l'année, c'est très dur d'être
> exhaustif. » (Anne-Laure de Boissieu, une ancienne collègue et amie)

Dans une [conférence que je recommande
vivement](https://www.youtube.com/watch?v=vktamvlVBx8), mon ancienne
collègue et amie Anne-Laure présente un concept que je ne connaissais pas et
qui m'a beaucoup servi depuis : le _brag document_.

C'est un document proche du journal de bord, à ceci près qu'il ne recense
que les fiertés, les sujets que l'on considère personnellement comme des
succès. Notre cerveau fonctionne ainsi : on oublie très vite ce dont on
devrait être fier, pendant que le problème sur lequel on bloque depuis deux
semaines occupe presque tout l'espace.

D'où l'intérêt de tenir un brag document avec chaque managé, et un autre
pour l'équipe dans son ensemble. Chaque personne y historise avec vous, au
fil de l'année, les fiertés qu'elle a eues : un titre, une date, une courte
description. À vous de faire le même exercice à l'échelle de l'équipe.

À quoi bon, me direz-vous ? Ce document se révèle précieux dans plusieurs
situations :

- accompagner un membre de l'équipe en questionnement, qui n'a pas
  l'impression de progresser ou qui traverse un syndrome de l'imposteur ;
- préparer les périodes d'évaluation annuelle en s'appuyant sur tous les
  succès de l'année, et pas seulement sur ceux des deux derniers mois ;
- défendre l'impact et la vision de votre équipe dans l'entreprise.

Je ne rends pas justice ici à la richesse du talk d'Anne-Laure. Il vaut
vraiment le détour :

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/vktamvlVBx8" title="Talk d'Anne-Laure de Boissieu sur le brag document" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!-- ============================================================
     SECTIONS À RÉDIGER (reprise prévue le 28/08 après-midi).
     Format : citation + reformulation des notes. Retirer les
     blocs TODO avant publication.
     ============================================================ -->

## Donner du feedback

> « Praise in public, feedback in private. » (Sarah Drasner)

Un manager passe une part énorme de son temps à donner du feedback. Je ne
vais pas détailler ici _comment_ le formuler : le sujet mérite un article à
lui seul. Je m'en tiens à quelques clés que l'expérience, et la lecture du
livre de Sarah, m'ont fait comprendre.

Commençons par le feedback positif. Quand quelqu'un de votre équipe fait
quelque chose que vous trouvez franchement bien, vous _devez_ le dire,
positivement, devant toute l'équipe. Et le redire lors du 1:1 suivant.

Pourquoi deux fois ? Parce que chacun des deux canaux, seul, laisse un
doute. En privé uniquement : « il me dit ça pour me faire plaisir, il ne le
pense pas vraiment ». En public uniquement : « il le dit devant tout le
monde, mais je ne sais pas ce qu'il en pense réellement ». Les deux
ensemble lèvent l'ambiguïté.

Tout cela suppose d'avoir noté ce qui s'est passé — c'est l'un des usages de
mon journal de bord. Des faits consignés factuellement, ce sont des
occasions de feedback prêtes à l'emploi. Et vous verrez qu'une personne
ajoute bien plus facilement une ligne à son brag document quand vous avez
commencé par reconnaître la chose vous-même.

_C'est quand, la dernière fois que vous avez dit à quelqu'un de votre équipe
qu'il ou elle avait fait du bon travail ?_

Vient ensuite le feedback plus difficile : les rectifications, les axes
d'amélioration.

Sur ce terrain, l'expérience m'a appris qu'il existe très peu de situations
qui justifient un feedback direct, sur le moment. La principale exception :
le danger immédiat. Si quelqu'un dit ou fait quelque chose qui peut nuire
directement à une autre personne, là, j'interviens tout de suite.

En dehors de ça, laisser le feedback mijoter est plutôt une bonne chose.
Qu'est-ce qui vous empêche de noter les faits et d'en reparler à froid lors
d'un prochain 1:1 ? Ce délai vous laisse réfléchir à la manière d'amener les
choses, et, la plupart du temps, il fait retomber la pression : « en fait,
ce n'est pas si grave ». Si un feedback ne vaut pas la peine d'attendre une
à deux semaines pour être donné, est-ce vraiment un feedback pertinent ?

À l'inverse du feedback positif, celui-ci se donne uniquement en privé, dans
un échange en tête-à-tête avec la personne.

## Le template de page de suivi individuel

> « TODO : citation » (TODO : auteur·ice)

<!-- TODO : rédiger + illustration du template (structure de la page :
     attentes, régularité, historique, feedbacks, objectifs…). -->

## Les valeurs et les préférences

> « Tu verras que la source première des conflits dans une équipe, ce sont
> des conflits de valeurs. Et l'ego, bien sûr. »
> ([Kenny Dits](https://www.linkedin.com/in/kenny-d-3761b59b/))

Si les frictions naissent surtout d'un désaccord sur ce qui compte, alors
une partie du travail de suivi consiste à savoir ce qui compte pour chacun,
avant que ça ne coince.

Sarah Drasner propose pour cela un exercice tout simple dans son livre :
poser directement la question à vos managés, en 1:1. Trois questions
suffisent :

- Dans ton travail, quelles sont les trois choses les plus importantes pour
  toi ?
- Qu'est-ce que tu préfères faire ?
- Qu'est-ce que tu aimes le moins faire ?

Rien qu'en posant ces questions, vous découvrirez que tout le monde ne
classe pas les choses dans le même ordre que vous. L'un vous parlera des
collègues et de l'ambiance, l'autre de la qualité du code, un troisième de
l'impact pour les utilisateurs, un quatrième de cohérence. C'est très varié.
Cet exercice vous fait mieux connaître les personnes de votre équipe et vous
évite de leur plaquer un archétype construit sur vous-même ou sur un autre
collègue.

Vous remarquerez aussi que certaines personnes n'évoquent pas du tout
certaines thématiques dans leur top 3. Ça ne veut pas dire que ça ne compte
pas pour elles, seulement que ce n'est pas leur priorité. Et ces
non-équivalences de priorité sont souvent à la racine des problèmes
d'équipe.

Imaginez A, « j'aime quand on règle vite les soucis des utilisateurs sans
trop débattre », et B, « j'aime quand on prend le temps de réfléchir au
problème pour trouver une solution qui répond parfaitement au besoin ».
Inutile de faire un dessin : A et B finiront par se retrouver en tension.
Mais si vous le savez, et que vous savez maintenant comment chacun
fonctionne, vous pouvez mettre un peu d'eau dans leurs vins respectifs et
trouver des compromis qui ménagent les valeurs des deux.

<figure>
  <svg
    viewBox="0 0 520 258"
    role="img"
    aria-label="Le top 3 de deux personnes de la même équipe : les priorités et leur ordre diffèrent, et une préoccupation commune n'a pas le même rang chez l'une et chez l'autre"
    style="width: 100%; max-width: 560px; height: auto; margin: 0 auto; display: block;"
  >
    <title>Deux classements de priorités très différents</title>
    <text x="145" y="22" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="13" font-weight="700">Personne A</text>
    <text x="395" y="22" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="13" font-weight="700">Personne B</text>
    <g>
      <rect x="40" y="36" width="210" height="52" rx="6" fill="rgb(var(--color-accent))" fill-opacity="0.85" />
      <text x="60" y="67" fill="rgb(var(--color-fill))" font-size="12" font-weight="700">1</text>
      <text x="80" y="67" fill="rgb(var(--color-fill))" font-size="12">Impact utilisateur</text>
      <rect x="40" y="96" width="210" height="52" rx="6" fill="none" stroke="rgb(var(--color-border))" stroke-width="1" />
      <text x="60" y="127" fill="rgb(var(--color-text-base))" font-size="12" font-weight="700">2</text>
      <text x="80" y="127" fill="rgb(var(--color-text-base))" font-size="12">Ambiance d'équipe</text>
      <rect x="40" y="156" width="210" height="52" rx="6" fill="none" stroke="rgb(var(--color-border))" stroke-width="1" />
      <text x="60" y="187" fill="rgb(var(--color-text-base))" font-size="12" font-weight="700">3</text>
      <text x="80" y="187" fill="rgb(var(--color-text-base))" font-size="12">Aller vite</text>
    </g>
    <g>
      <rect x="290" y="36" width="210" height="52" rx="6" fill="none" stroke="rgb(var(--color-border))" stroke-width="1" />
      <text x="310" y="67" fill="rgb(var(--color-text-base))" font-size="12" font-weight="700">1</text>
      <text x="330" y="67" fill="rgb(var(--color-text-base))" font-size="12">Qualité du code</text>
      <rect x="290" y="96" width="210" height="52" rx="6" fill="none" stroke="rgb(var(--color-border))" stroke-width="1" />
      <text x="310" y="127" fill="rgb(var(--color-text-base))" font-size="12" font-weight="700">2</text>
      <text x="330" y="127" fill="rgb(var(--color-text-base))" font-size="12">Réflexion posée</text>
      <rect x="290" y="156" width="210" height="52" rx="6" fill="rgb(var(--color-accent))" fill-opacity="0.85" />
      <text x="310" y="187" fill="rgb(var(--color-fill))" font-size="12" font-weight="700">3</text>
      <text x="330" y="187" fill="rgb(var(--color-fill))" font-size="12">Impact utilisateur</text>
    </g>
    <path d="M250 62 C 270 62, 270 182, 290 182" fill="none" stroke="rgb(var(--color-accent))" stroke-width="1.5" stroke-dasharray="4 3" stroke-opacity="0.7" />
    <text x="260" y="238" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="11" opacity="0.7">Même préoccupation, rang 1 pour l'une, rang 3 pour l'autre</text>
  </svg>
  <figcaption style="text-align: center; font-size: 0.875rem; margin-top: 0.5rem;">
    Le même exercice, deux classements très différents — et une préoccupation
    commune qui ne pèse pas du tout le même poids d'une personne à l'autre.
  </figcaption>
</figure>

Connaître les préférences, ensuite, ce n'est pas pour ne distribuer que des
tâches que chacun adore et cloisonner l'équipe. C'est pour savoir ce que les
gens aiment et ce qu'ils détestent. On a tous une jauge intérieure : elle se
vide quand on fait des choses qui nous pèsent, elle se recharge quand on
fait des choses qui nous plaisent. En connaissant les deux, vous pouvez
aider chacun à tenir cet équilibre.

<figure>
  <svg
    viewBox="0 0 520 250"
    role="img"
    aria-label="Une jauge intérieure : les tâches qui pèsent la vident, les tâches qui plaisent la rechargent ; le rôle du manager est d'aider à maintenir l'équilibre sur la durée"
    style="width: 100%; max-width: 520px; height: auto; margin: 0 auto; display: block;"
  >
    <title>La jauge intérieure</title>
    <rect x="234" y="20" width="52" height="10" rx="2" fill="rgb(var(--color-border))" />
    <rect x="210" y="30" width="100" height="180" rx="12" fill="none" stroke="rgb(var(--color-border))" stroke-width="2" />
    <clipPath id="jauge-tank"><rect x="212" y="32" width="96" height="176" rx="10" /></clipPath>
    <g clip-path="url(#jauge-tank)">
      <rect x="212" y="120" width="96" height="88" fill="rgb(var(--color-accent))" fill-opacity="0.85" />
    </g>
    <line x1="210" y1="120" x2="310" y2="120" stroke="rgb(var(--color-border))" stroke-width="1" stroke-dasharray="3 3" />
    <path d="M150 60 L150 140 M138 122 L150 142 L162 122" fill="none" stroke="rgb(var(--color-border))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <text x="150" y="168" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="12" font-weight="600">Tâches qui pèsent</text>
    <text x="150" y="186" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="11" opacity="0.7">la jauge se vide</text>
    <path d="M370 140 L370 60 M358 78 L370 58 L382 78" fill="none" stroke="rgb(var(--color-accent))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <text x="370" y="168" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="12" font-weight="600">Tâches qui plaisent</text>
    <text x="370" y="186" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="11" opacity="0.7">la jauge se recharge</text>
    <text x="260" y="234" text-anchor="middle" fill="rgb(var(--color-text-base))" font-size="11" opacity="0.7">L'équilibre se joue sur la durée, pas sur une seule journée</text>
  </svg>
  <figcaption style="text-align: center; font-size: 0.875rem; margin-top: 0.5rem;">
    Chacun porte cette jauge. Le travail de suivi, c'est de faire en sorte
    qu'elle ne tombe pas durablement à zéro.
  </figcaption>
</figure>

L'exercice est très simple et vous apprendra énormément sur votre équipe. Il
se fait en 1:1 ; mais quand l'équipe est suffisamment à l'aise, il devient
un bon jeu collectif : chacun arrive avec ses trois post-it par question, on
mélange le tout, et l'équipe doit retrouver quelle réponse va à qui, et dans
quel ordre.

Toutes ces réponses se rangent dans la page de suivi de la personne, et vous
y reviendrez : pour répartir les sujets, pour comprendre une tension, pour
vérifier de temps en temps que ce qui comptait il y a un an compte encore.

## Suivre et encourager l'apprentissage

> « Un jour j'ai monté un truc, les _Last Friday Talks_ : une demi-journée
> de conférences tech internes, le dernier vendredi du mois, pour que les
> gens racontent ce qu'ils font. Dès la deuxième édition ce n'était plus le
> dernier vendredi, mais peu importe. »
> ([Kenny Dits](https://www.linkedin.com/in/kenny-d-3761b59b/))

Le manager a le devoir d'accompagner l'apprentissage de son équipe, sur deux
axes qui vont ensemble : s'assurer que chacun a le temps et les moyens
d'apprendre, et s'assurer que personne ne se disperse.

J'ai fini par en faire un petit rituel. On liste ensemble, dans un tableau,
les sujets de veille technique que la personne veut explorer, avec pour
chacun : le sujet, son état, la date de départ, une durée estimée, une
courte description et un pourcentage d'avancement. Tout y passe : des
conférences à voir en replay, des articles à lire, des _proof of concept_
d'outils ou de technos, des formations, des certifications.

| Sujet                      | État     | Départ     | Durée est. | Avancement |
| -------------------------- | -------- | ---------- | ---------- | ---------- |
| Talk « Local-first » dotJS | partagé  | 2026-02-10 | 2 h        | 100 %      |
| PoC OpenTelemetry          | terminé  | 2026-01-15 | 1 j        | 100 %      |
| Rust pour l'embarqué       | en cours | 2026-03-02 | 3 j        | 60 %       |
| Certification CKA          | demandé  | —          | 5 j        | 0 %        |

Une seule règle : on ne démarre un sujet que s'il n'y en a pas déjà deux en
cours. Autrement dit, pour en commencer un nouveau, il faut d'abord en
terminer un, ou l'abandonner assumé.

Les états possibles : _demandé_, _rejeté_ (très rare — sauf si quelqu'un
vous annonce qu'il aimerait apprendre le saut en parachute), _en cours_,
_terminé_, et _partagé_.

Ce dernier état est le plus important. Pour moi, un apprentissage n'est
vraiment terminé que lorsqu'il a été partagé : à l'équipe, à la guilde, à la
communauté. C'est là que la citation de Kenny prend tout son sens — un
espace de partage régulier, même bancal, même plus vraiment le dernier
vendredi du mois, donne une destination à tout ce travail de veille.

Je dois avouer qu'une fois le principe bien ancré et adopté par l'équipe, le
suivi dans le tableau n'est plus vraiment nécessaire. Mais il aide à poser
les bases.

## Et la suite ?

Cet article est évidemment loin de couvrir tous les sujets autour du 1:1 et
du suivi individuel. Si vous voulez que je précise un point ou que
j'aborde un thème en particulier, mes réseaux sont accessibles depuis ce
blog : écrivez-moi, je serai ravi de vous lire.

Ce thème des citations et principes reçus se poursuivra dans un prochain
article consacré à **« Donner des objectifs et de la vision »**. Comme
toujours, vous pouvez retrouver l'ensemble de la série via le tag
[engineering-management](/tags/engineering-management).
