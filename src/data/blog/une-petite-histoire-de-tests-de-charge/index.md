---
title: "Une petite histoire de tests de charge"
description: "Retour d'expérience sur les tests de charge d'une app de poker planning : SSE, k6, et la question qui gratte — est-ce que ça tient vraiment la charge ?"
pubDatetime: 2026-03-01
language: fr
ogImage: ./homepage.jpg
tags:
  - performance
  - load-testing
  - k6
  - sse
  - web
---

Pour faire suite à [mon article précédent](/posts/une-petite-histoire-de-compression/), j'ai voulu aborder un autre sujet sur lequel j'ai travaillé autour de cette même app de poker planning.

Oui, cette application de poker planning, [poker.slashgear.dev](https://poker.slashgear.dev) est un peu anecdotique, j'en conviens.
Mais c'est justement l'intérêt : c'est ma sandbox.
Une app simple, avec des boutons, des interactions, plusieurs pages — parfaite pour expérimenter sans risque.

Et l'appli commence à avoir une vraie base d'utilisateurs réguliers : plus de 200 rooms créées et 1 500 votes.
C'est franchement cool.

## Les Server-Sent Events, mon choix technique

La synchronisation des votes entre les différents utilisateurs est gérée grâce aux [Server-Sent Events](https://developer.mozilla.org/fr/docs/Web/API/Server-sent_events/Using_server-sent_events) (SSE)[^sse].

Les SSE, c'est une connexion HTTP persistante unidirectionnelle : le serveur pousse des événements vers le client, sans que le client ait besoin de redemander.
Par rapport aux WebSockets, c'est bien plus simple à mettre en place — pas de protocole de handshake, pas de connexion bidirectionnelle à gérer, et ça passe sans broncher à travers les proxies HTTP.
Pour un cas d'usage comme le mien — diffuser un état partagé à plusieurs clients — c'est largement suffisant.

Si vous voulez voir comment c'est implémenté, le code est disponible :
- [Côté serveur](https://github.com/Slashgear/poker-planning/blob/main/server/openapi.ts) — avec `streamSSE` de HonoJS, un keep-alive toutes les 30 secondes, et un broadcast via un `Map` de callbacks par room
- [Côté front](https://github.com/Slashgear/poker-planning/blob/main/src/hooks/useRoom.ts) — un simple `EventSource` dans un hook Preact

Voilà globalement comment les échanges se passent :

<figure>
<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sse-diagram-title sse-diagram-desc" style="max-width:560px;width:100%;font-family:system-ui,sans-serif">
  <title id="sse-diagram-title">Diagramme de séquence SSE entre le front et le serveur</title>
  <desc id="sse-diagram-desc">Le client ouvre une connexion SSE, le serveur envoie l'état initial, puis à chaque vote (POST) le serveur broadcast un événement SSE à tous les clients connectés à la room.</desc>
  <rect width="560" height="300" fill="#fff" rx="8"/>
  <!-- Acteurs -->
  <rect x="40" y="20" width="100" height="32" rx="6" fill="#6d28d9"/>
  <text x="90" y="41" text-anchor="middle" font-size="13" fill="#fff" font-weight="bold">Client A</text>
  <rect x="230" y="20" width="100" height="32" rx="6" fill="#0f172a"/>
  <text x="280" y="41" text-anchor="middle" font-size="13" fill="#fff" font-weight="bold">Serveur</text>
  <rect x="420" y="20" width="100" height="32" rx="6" fill="#6d28d9"/>
  <text x="470" y="41" text-anchor="middle" font-size="13" fill="#fff" font-weight="bold">Client B</text>
  <!-- Lignes de vie -->
  <line x1="90" y1="52" x2="90" y2="285" stroke="#c4b5fd" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="280" y1="52" x2="280" y2="285" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="470" y1="52" x2="470" y2="285" stroke="#c4b5fd" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- 1. Client A ouvre SSE -->
  <line x1="90" y1="90" x2="270" y2="90" stroke="#6d28d9" stroke-width="1.5" marker-end="url(#arrow-purple)"/>
  <text x="180" y="84" text-anchor="middle" font-size="10" fill="#6d28d9">GET /rooms/:code/events</text>
  <!-- 2. Serveur → état initial → Client A -->
  <line x1="280" y1="110" x2="100" y2="110" stroke="#0f172a" stroke-width="1.5" marker-end="url(#arrow-dark)"/>
  <text x="180" y="104" text-anchor="middle" font-size="10" fill="#0f172a">SSE : état initial</text>
  <!-- 3. Client B ouvre SSE -->
  <line x1="470" y1="135" x2="290" y2="135" stroke="#6d28d9" stroke-width="1.5" marker-end="url(#arrow-purple)"/>
  <text x="380" y="129" text-anchor="middle" font-size="10" fill="#6d28d9">GET /rooms/:code/events</text>
  <!-- 4. Serveur → état initial → Client B -->
  <line x1="280" y1="155" x2="460" y2="155" stroke="#0f172a" stroke-width="1.5" marker-end="url(#arrow-dark)"/>
  <text x="380" y="149" text-anchor="middle" font-size="10" fill="#0f172a">SSE : état initial</text>
  <!-- 5. Client A vote -->
  <line x1="90" y1="195" x2="270" y2="195" stroke="#6d28d9" stroke-width="1.5" marker-end="url(#arrow-purple)"/>
  <text x="180" y="189" text-anchor="middle" font-size="10" fill="#6d28d9">POST /rooms/:code/vote</text>
  <!-- Label broadcast -->
  <text x="280" y="220" text-anchor="middle" font-size="10" fill="#64748b" font-style="italic">broadcast</text>
  <!-- 6. Serveur → Client A -->
  <line x1="280" y1="235" x2="100" y2="235" stroke="#059669" stroke-width="1.5" marker-end="url(#arrow-green)"/>
  <text x="180" y="229" text-anchor="middle" font-size="10" fill="#059669">SSE : nouvel état</text>
  <!-- 7. Serveur → Client B -->
  <line x1="280" y1="255" x2="460" y2="255" stroke="#059669" stroke-width="1.5" marker-end="url(#arrow-green)"/>
  <text x="380" y="249" text-anchor="middle" font-size="10" fill="#059669">SSE : nouvel état</text>
  <!-- Keep-alive -->
  <text x="280" y="285" text-anchor="middle" font-size="9" fill="#94a3b8">↕ keep-alive toutes les 30s</text>
  <!-- Marqueurs de flèche -->
  <defs>
    <marker id="arrow-purple" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#6d28d9"/>
    </marker>
    <marker id="arrow-dark" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#0f172a"/>
    </marker>
    <marker id="arrow-green" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#059669"/>
    </marker>
  </defs>
</svg>
<figcaption>Quand un client vote, le serveur broadcast un événement SSE à tous les clients connectés à la room.</figcaption>
</figure>

La présentation de [M4DZ](https://m4dz.net/) lors du meetup LyonJS de février 2026 est une excellente ressource pour creuser le sujet :

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/DdZnG81I1uI" title="M4DZ - LyonJS février 2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Les SSE, c'est élégant.
Mais j'avais un doute.

## La question qui gratte

Est-ce que les SSE tiennent vraiment la charge ?
Est-ce que ça ne va pas flancher dès qu'il y a un peu de monde sur l'application ?

Il n'y a qu'une seule façon de le savoir : mesurer.
C'est quelque chose que j'ai appris chez Bedrock Streaming, notamment grâce à [Yann Verry](https://verry.org/).

J'avais déjà utilisé plusieurs outils pour ça dans le passé : **Gatling** et **Artillery**.

Gatling, avec sa DSL spécifique... franchement pas fan.
Artillery, la configuration en YAML paraît séduisante au début, mais ça devient vite pénible à maintenir dès qu'on sort des scénarios simples.

C'est là que j'ai découvert **k6**.

## k6, une solution à mon problème

[k6](https://k6.io/) est un outil open source de tests de charge développé par **Grafana Labs**.
Le principe : vous écrivez vos scénarios en JavaScript (ou TypeScript), et k6 se charge de les exécuter avec le niveau de charge que vous définissez — nombre d'utilisateurs virtuels, rampe de montée, durée.

Ce qui m'a convaincu, c'est son SDK TypeScript : une API claire, une excellente DX[^dx], et la possibilité de modéliser des scénarios complexes avec les mêmes réflexes qu'on a en développement web.
On code un test comme on coderait un script — pas de YAML, pas de DSL ésotérique.

J'ai mis en place [cinq scénarios](https://github.com/Slashgear/poker-planning/tree/main/tests/load) pour couvrir différentes situations :

| Scénario | Objectif | Charge simulée |
|---|---|---|
| `basic-workflow` | Valider le flux nominal | 10–20 utilisateurs |
| `spike-test` | Tester une montée brutale | 5 → 100 utilisateurs en 10s |
| `stress-test` | Trouver le point de rupture | Jusqu'à 1 000 utilisateurs |
| `realistic-sessions` | Simuler de vraies sessions | 500 utilisateurs, 50–100 rooms |
| `sse-endurance` | Tester la tenue des connexions longues | 1 000 connexions SSE pendant 20 min |

Quelques conseils tirés de cette expérience :

- **Commencez par le flux nominal** avant d'attaquer les tests de stress. Ça permet de valider les seuils de base (P95[^p95] < 500ms pour moi) et de détecter les régressions facilement.
- **Les `thresholds` sont vos meilleurs alliés** : définissez des seuils d'erreur et de latence dès le départ. Si un scénario les dépasse, k6 sort avec un code d'erreur — parfait pour l'intégrer dans une CI.
- **Pour les SSE**, il n'y a pas de support natif d'`EventSource` dans k6. J'ai simulé les connexions longues via des requêtes HTTP persistantes, ce qui reste représentatif pour mesurer la tenue en charge du serveur.

Ce que je n'ai pas encore exploré : l'intégration avec **Grafana Cloud** pour visualiser les métriques en temps réel, et le mode **k6 browser** qui permet de piloter un vrai Chromium pour simuler des interactions utilisateur côté front.

## Et vous ?

Vous avez déjà mis en place des tests de charge sur vos projets ?

En tout cas, de mon côté, le verdict est rassurant : l'appli tient bien la charge.

[^sse]: Server-Sent Events — mécanisme HTTP permettant au serveur de pousser des événements vers le client via une connexion persistante unidirectionnelle.
[^dx]: DX (Developer Experience) — qualité de l'expérience de développement offerte par un outil ou une API.
[^p95]: P95 (95e percentile) — valeur en dessous de laquelle se situent 95 % des mesures. Un P95 à 500ms signifie que 95 % des requêtes répondent en moins de 500ms.