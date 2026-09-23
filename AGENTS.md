# AGENTS.md

Guidance for AI agents working in this repository. For human-facing guidance, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Project overview

- Personal blog of Antoine Caron, deployed at https://blog.slashgear.dev/.
- **Astro 7** site with content collections + **React** islands, **Tailwind CSS 4**, **TypeScript**.
- **Bun is the only package manager.** Never use pnpm, npm or yarn. Lockfile: `bun.lock`.
- Site config lives in `src/config.ts`; content schemas in `src/content.config.ts`.

## Commands

```sh
bun install           # install dependencies
bun run dev           # dev server on http://localhost:4321
bun run build         # astro check + astro build (equivalent of CI gate)
bun run preview       # preview production build
bun run sync          # regenerate astro content types
bun run format        # oxfmt --write .
bun run format:check  # oxfmt --check .
bun run lint          # oxlint .
bun test              # unit tests (src/utils/utils.test.ts)
bun run a11y          # pa11y checks against the local sitemap
```

Always finish a task by running: `bun run format:check`, `bun run lint`, `bun test`, and `bun run build` (or `format` to auto-fix first). The CI runs all of these.

## Where content lives

| Content      | Location                          | Format                 |
| ------------ | --------------------------------- | ---------------------- |
| Blog posts   | `src/data/blog/<slug>/index.md`   | Markdown + frontmatter |
| Conferences  | `src/data/conferences/<name>.yml` | YAML                   |
| Podcasts     | `src/data/podcasts/<show>.yml`    | YAML                   |
| Friends      | `src/data/friends/<name>.json`    | JSON                   |
| Static pages | `src/pages/`                      | Astro/Markdown         |

## Blog post frontmatter (quick reference)

Full schema: `src/content.config.ts`. Required: `title`, `description`, `pubDatetime`.

```yaml
title: "..."
description: "..."
pubDatetime: 2026-09-23
modDatetime: 2026-10-01 # optional
language: fr # fr | en
ogImage: "./cover.webp" # optional, local path
tags: [engineering-management] # optional, defaults to ["others"]
draft: false # optional
featured: false # optional
canonicalURL: "..." # optional
```

## Conventions & pitfalls

- Slugs and tags are **kebab-case**.
- Bilingual posts: the English version of a French slug is prefixed with `en-` (e.g. `use-reduced-motion` / `en-use-reduced-motion`); translated pairs get reciprocal `hreflang` tags.
- Use internal links as `/posts/<slug>` (no domain, no trailing `index`).
- **Do not hand-edit `bun.lock`**; let Bun resolve it.
- **Never commit secrets or API keys.**
- Don't commit `dist/`, `.astro/` or other generated output (gitignored).
- Keep accessibility in mind: CI runs Lighthouse budgets and pa11y, so avoid patterns that fail WCAG checks (low contrast, missing alt/labels).
- Do not modify `.github/workflows/` or audit configs unless the task explicitly asks.
