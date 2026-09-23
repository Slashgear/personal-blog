# Contributing to Antoine Caron's Blog

Thanks for taking the time to contribute! Contributions, issues and feature requests are all welcome.

## Getting started

Prerequisites: [Bun](https://bun.sh/) (see `packageManager` in `package.json`).

```sh
bun install
bun run dev
```

The dev server runs on [http://localhost:4321](http://localhost:4321) by default.

## Making a change

1. Create a branch off `main` (`git checkout -b your-change`).
2. Make your changes.
3. Run the checks listed in [Before you submit](#before-you-submit).
4. Open a pull request against `main`.

## Continuous integration

A push or pull request triggers the CI workflow (`.github/workflows/continuous-integration.yml`):

- **Build** — installs dependencies, builds the site, then runs `format:check`, `lint` and the unit tests. The built output is uploaded as an artifact for the audits.
- **Deploy** — publishes `main` to GitHub Pages.
- **Audits** — Lighthouse budgets (`.lighthouserc.json`) and pa11y accessibility checks. These run alongside the deploy and are **reporting-only for now** (`continue-on-error`), so they won't block your PR.
- A PR-size labeler (`.github/workflows/label-pr.yml`) adds a size label to every pull request.

## Writing an article

Articles live in `src/data/blog/`. Each post is a folder named after its URL slug, containing an `index.md`:

```
src/data/blog/
  my-article-slug/
    index.md
    cover.webp     # optional, referenced via ogImage
```

### Frontmatter

The schema is defined in `src/content.config.ts`. Example:

```yaml
---
title: "My article title"
description: |
  A short, standalone summary of the post, used for the
  excerpt, meta description and RSS feed.
pubDatetime: 2026-09-23
modDatetime: 2026-10-01
language: fr
ogImage: "./cover.webp"
tags:
  - engineering-management
draft: false
featured: false
canonicalURL: "https://example.com/original-post"
---
```

| Field          | Required | Description                                                                 |
| -------------- | -------- | --------------------------------------------------------------------------- |
| `title`        | yes      | Article title                                                               |
| `description`  | yes      | Standalone summary (used for excerpts, meta and RSS)                        |
| `pubDatetime`  | yes      | Publication date (`YYYY-MM-DD` or full ISO date)                            |
| `tags`         | no       | List of tags; defaults to `["others"]`                                      |
| `language`     | no       | `fr` or `en`; omit for the site default                                     |
| `modDatetime`  | no       | Last update date; shown in the UI and used for `lastmod` in the sitemap     |
| `ogImage`      | no       | Path to a local cover image (e.g. `./cover.webp`); auto-generated if absent |
| `draft`        | no       | Hide the post from the site when `true`                                     |
| `featured`     | no       | Highlight the post when `true`                                              |
| `author`       | no       | Defaults to the site author                                                 |
| `canonicalURL` | no       | Set when the post is also published elsewhere                               |

### Translations

A post can have a translated counterpart. Convention: the English version of a
French slug gets an `en-` prefix (e.g. `use-reduced-motion` and
`en-use-reduced-motion`). Translated pairs are linked with reciprocal
`hreflang` tags, so keep the titles and descriptions in sync.

### Content tips

- Use internal links in the form `/posts/<slug>` so they survive builds.
- Keep the `description` concise — it doubles as the meta description and RSS excerpt.
- The table of contents is generated automatically from headings (`remark-toc`).
- Use the Shiki code block syntax for highlighting; no extra plugin needed.
- When adding images, prefer web-optimised formats and reference them via `ogImage` or relative paths in the body.

## Before you submit

Run these and fix any issue before opening a pull request:

```sh
bun run format:check   # or `bun run format` to auto-fix
bun run lint
bun test
bun run build          # runs `astro check` first, then the build
```

`bun run build` is the closest local equivalent to what CI runs, so make sure it passes.

## Reporting issues

Open an issue and include the page URL, what you expected, and what happened. Screenshots are welcome for visual or accessibility problems.
