---
title: "Une petite histoire de compression"
description: "Retour d'expérience sur l'optimisation du poids d'une application de poker planning open source : de React à Preact, de gzip à la volée à la compression au build time."
pubDatetime: 2026-02-18
language: fr
ogImage: ./homepage.png
tags:
  - performance
  - compression
  - web
---

J'ai développé une petite application open source de poker planning : [poker.slashgear.dev](https://poker.slashgear.dev/).
Le code source est disponible sur [GitHub](https://github.com/Slashgear/poker-planning).

La stack initiale était composée de **React 19**, TypeScript, TanStack Router, TanStack Query et **Tailwind 4**, le tout servi par **HonoJS**.
Un jour, en regardant le poids de l'application, je me suis dit que c'était beaucoup trop pour une simple app de poker planning.

## Un repère qui m'a marqué

> "Quand j'ai commencé le web, une bonne page web devait faire 100 Ko maximum"
> — [Pascal Martin](https://blog.pascal-martin.fr/)

Cette phrase m'a marqué.
Une application de poker planning, c'est un écran avec des cartes et un bouton.
Est-ce qu'on a vraiment besoin de plus de 100 Ko pour ça ?

Spoiler : la v2.16.0 dépassait largement ce seuil.

## L'état initial : v2.16.0

En analysant le bundle avec [rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer), le constat était clair :

- **React 19** + **ReactDOM** représentaient une part importante du bundle
- **TanStack Router** et **TanStack Query** ajoutaient du poids significatif
- Le JS bundle pesait environ **~95 Ko gzippé**
- Le CSS bundle pesait environ **~27.78 Ko**
- La compression était du **GZIP niveau 6 à la volée** par HonoJS

Pour une app qui affiche des cartes de poker et synchronise un état simple, c'était beaucoup trop.

## Étape 1 : Drop React pour Preact

La première question à se poser : **ai-je vraiment besoin de React ?**

[Preact](https://preactjs.com/) est un drop-in replacement de React qui pèse une fraction du poids original.
Rien dans l'application ne justifiait les fonctionnalités spécifiques à React 19.

J'en ai profité pour :

- Remplacer **TanStack Router** par **[preact-iso](https://github.com/preactjs/preact-iso)**, le routeur minimaliste de Preact
- Supprimer **TanStack Query** qui n'était pas indispensable pour les besoins de l'app

> Commit de référence : [`0f29c59`](https://github.com/Slashgear/poker-planning/commit/0f29c59)

**Résultat :**

- JS bundle : ~95 Ko → **~21 Ko gzip** (**-78%**)
- Build time : ~2.1s → **~0.6s**

## Étape 2 : Compression au build time

L'application est une **SPA full statique**.
Les fichiers ne changent jamais entre deux déploiements.
Alors pourquoi les compresser à chaque requête ?

Comme le rappelle l'[almanac HTTP Archive](https://almanac.httparchive.org/en/2024/compression), la compression au build time permet d'utiliser les niveaux de compression les plus élevés sans impact sur le temps de réponse.

J'ai mis en place **3 formats de pré-compression** :

- **Brotli** (qualité 11) — le meilleur ratio pour les navigateurs modernes
- **Zstd** (ultra 22) — de plus en plus supporté
- **Zopfli** — compression GZIP optimale, compatible partout

Voici l'extrait du `Dockerfile` :

```dockerfile
RUN find /app/dist/client -type f \( -name "*.js" -o -name "*.css" -o -name "*.html" -o -name "*.svg" \) \
    -exec brotli --best {} \; \
    -exec zstd --ultra -22 {} \; \
    -exec zopfli --i100 {} \;
```

Côté serveur, il suffit de configurer le serving de fichiers pré-compressés.
**Zéro CPU runtime** pour la compression.

Dans mon cas j'utilise HonoJS avec l'option `precompressed: true`, mais cette approche fonctionne avec n'importe quel serveur web.

<details>
<summary>Exemple avec Nginx</summary>

Activez le module `ngx_http_gzip_static_module` pour servir les fichiers `.gz` pré-compressés, et le module `ngx_http_brotli_static_module` pour les `.br` :

```nginx
server {
    # Sert les .gz pré-compressés au lieu de compresser à la volée
    gzip_static on;

    # Sert les .br pré-compressés (module brotli)
    brotli_static on;

    location /assets/ {
        root /var/www/html;
    }
}
```

</details>

<br>

<details>
<summary>Exemple avec Apache</summary>

Avec les modules `mod_deflate` et `mod_rewrite`, Apache peut servir les fichiers pré-compressés :

```apache
# Servir les fichiers .br si le navigateur supporte Brotli
RewriteEngine On
RewriteCond %{HTTP:Accept-Encoding} br
RewriteCond %{REQUEST_FILENAME}.br -f
RewriteRule ^(.*)$ $1.br [L]

# Servir les fichiers .gz si le navigateur supporte gzip
RewriteCond %{HTTP:Accept-Encoding} gzip
RewriteCond %{REQUEST_FILENAME}.gz -f
RewriteRule ^(.*)$ $1.gz [L]

# Indiquer le bon Content-Type et Content-Encoding
<FilesMatch "\.br$">
    Header set Content-Encoding br
    RemoveLanguage .br
</FilesMatch>
<FilesMatch "\.gz$">
    Header set Content-Encoding gzip
</FilesMatch>
```

</details>

<br>

<details>
<summary>Exemple avec Caddy</summary>

Caddy gère nativement les fichiers pré-compressés avec la directive `file_server` :

```caddy
example.com {
    root * /var/www/html
    file_server {
        precompressed zstd br gzip
    }
}
```

C'est tout. Caddy cherche automatiquement les fichiers `.zst`, `.br` et `.gz` et les sert s'ils existent.

</details>

| Format                 | Niveau       | JS bundle |
| ---------------------- | ------------ | --------- |
| GZIP 6 (à la volée)    | Standard     | ~21.5 Ko  |
| Zopfli (build time)    | Optimal GZIP | ~20.8 Ko  |
| Brotli 11 (build time) | Optimal      | ~18.9 Ko  |
| Zstd 22 (build time)   | Ultra        | ~19.1 Ko  |

<figure>
<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="chart-formats-title chart-formats-desc" style="max-width:460px;width:100%;font-family:system-ui,sans-serif">
  <title id="chart-formats-title">Taille JS bundle par format de compression</title>
  <desc id="chart-formats-desc">GZIP 6 : 21.5 Ko, Zopfli : 20.8 Ko, Brotli 11 : 18.9 Ko, Zstd 22 : 19.1 Ko. Brotli offre le meilleur ratio.</desc>
  <rect width="460" height="220" fill="#fff" rx="8"/>
  <text x="230" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">Taille JS bundle par format de compression (Ko)</text>
  <line x1="60" y1="40" x2="60" y2="175" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="60" y1="175" x2="440" y2="175" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="60" y1="75" x2="440" y2="75" stroke="#f1f5f9" stroke-width="1"/>
  <line x1="60" y1="110" x2="440" y2="110" stroke="#f1f5f9" stroke-width="1"/>
  <line x1="60" y1="145" x2="440" y2="145" stroke="#f1f5f9" stroke-width="1"/>
  <rect x="80" y="55" width="70" height="120" rx="4" fill="#7c3aed"/>
  <text x="115" y="50" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">21.5</text>
  <rect x="170" y="62" width="70" height="113" rx="4" fill="#8b5cf6"/>
  <text x="205" y="57" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">20.8</text>
  <rect x="260" y="80" width="70" height="95" rx="4" fill="#a78bfa"/>
  <text x="295" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">18.9</text>
  <rect x="350" y="76" width="70" height="99" rx="4" fill="#c4b5fd"/>
  <text x="385" y="71" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">19.1</text>
  <text x="115" y="195" text-anchor="middle" font-size="10" fill="#334155">GZIP 6</text>
  <text x="205" y="195" text-anchor="middle" font-size="10" fill="#334155">Zopfli</text>
  <text x="295" y="195" text-anchor="middle" font-size="10" fill="#334155">Brotli 11</text>
  <text x="385" y="195" text-anchor="middle" font-size="10" fill="#334155">Zstd 22</text>
</svg>
</figure>

## Étape 3 : Optimisation Tailwind CSS

Tailwind 4 utilise par défaut des **CSS custom properties** pour les couleurs.
En ajoutant `theme(inline)` dans l'import, les couleurs sont directement inlinées dans les classes utilitaires :

```css
@import "tailwindcss" theme(inline);
```

J'ai aussi supprimé une classe `.sr-only` qui était dupliquée (déjà fournie par Tailwind).

**Résultat :** CSS ~27.78 Ko → **~21.51 Ko** (**-22%**)

## Récapitulatif : v2.16.0 vs v3.2.0

| Métrique         | v2.16.0   | v3.2.0    | Gain     |
| ---------------- | --------- | --------- | -------- |
| JS bundle (gzip) | ~95 Ko    | ~21 Ko    | **-78%** |
| CSS bundle       | ~27.78 Ko | ~21.51 Ko | **-22%** |
| Build time       | ~2.1s     | ~0.6s     | **-72%** |

<figure>
<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="chart-compare-title chart-compare-desc" style="max-width:500px;width:100%;font-family:system-ui,sans-serif">
  <title id="chart-compare-title">Comparaison des bundles v2.16.0 vs v3.2.0</title>
  <desc id="chart-compare-desc">JS bundle gzip : 95 Ko en v2.16.0 contre 21 Ko en v3.2.0 (-78%). CSS bundle : 27.78 Ko contre 21.51 Ko (-22%).</desc>
  <rect width="500" height="260" fill="#fff" rx="8"/>
  <text x="250" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">Taille des bundles v2.16.0 vs v3.2.0 (Ko)</text>
  <!-- Légende -->
  <rect x="150" y="36" width="14" height="14" rx="3" fill="#6d28d9"/>
  <text x="170" y="48" font-size="11" fill="#0f172a">v2.16.0</text>
  <rect x="270" y="36" width="14" height="14" rx="3" fill="#a78bfa"/>
  <text x="290" y="48" font-size="11" fill="#0f172a">v3.2.0</text>
  <!-- JS -->
  <text x="55" y="88" text-anchor="end" font-size="12" fill="#0f172a">JS</text>
  <rect x="60" y="72" width="370" height="26" rx="4" fill="#6d28d9"/>
  <text x="420" y="90" font-size="11" fill="#fff" font-weight="bold">95 Ko</text>
  <rect x="60" y="103" width="82" height="26" rx="4" fill="#a78bfa"/>
  <text x="70" y="121" font-size="11" fill="#0f172a" font-weight="bold">21 Ko</text>
  <text x="152" y="121" font-size="11" fill="#059669" font-weight="bold">-78%</text>
  <!-- CSS -->
  <text x="55" y="163" text-anchor="end" font-size="12" fill="#0f172a">CSS</text>
  <rect x="60" y="147" width="108" height="26" rx="4" fill="#6d28d9"/>
  <text x="70" y="165" font-size="11" fill="#fff" font-weight="bold">27.78 Ko</text>
  <rect x="60" y="178" width="84" height="26" rx="4" fill="#a78bfa"/>
  <text x="70" y="196" font-size="11" fill="#0f172a" font-weight="bold">21.51 Ko</text>
  <text x="154" y="196" font-size="11" fill="#059669" font-weight="bold">-22%</text>
  <!-- Build time -->
  <text x="55" y="235" text-anchor="end" font-size="12" fill="#0f172a">Build</text>
  <rect x="60" y="219" width="162" height="26" rx="4" fill="#6d28d9"/>
  <text x="70" y="237" font-size="11" fill="#fff" font-weight="bold">2.1s</text>
  <rect x="60" y="249" width="46" height="4" rx="2" fill="#a78bfa"/>
  <text x="116" y="256" font-size="11" fill="#059669" font-weight="bold">0.6s (-72%)</text>
</svg>
</figure>

## Pour aller plus loin

La conférence d'[Hubert Sablonnière](https://www.hsablonniere.com/) et moi-même sur la compression web est une mine d'or sur le sujet :

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/AF99cb1SCqMgra" title="Hubert Sablonnière - Compression web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

L'article [24 jours de web 2024](https://www.24joursdeweb.fr/2024/compresser-les-donnees-http) détaille aussi les mécanismes de compression HTTP.

## Ce qu'il faut retenir

- **Pré-compressez au build time** (Brotli, Zstd, Zopfli) plutôt qu'à la volée : c'est gratuit en CPU et le ratio est bien meilleur
- **Questionnez vos dépendances** : avez-vous vraiment besoin de React pour votre projet ?
- Utilisez **`theme(inline)`** avec Tailwind 4 pour réduire le CSS généré
- **Mesurez** avec des outils comme `rollup-plugin-visualizer` ou Lighthouse
- Gardez en tête le seuil de **100 Ko** comme objectif : si une page dépasse ce poids, c'est un signal pour investiguer
