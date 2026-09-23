# Antoine Caron's Blog

The source code of [blog.slashgear.dev](https://blog.slashgear.dev/), the personal blog of [Antoine Caron](https://github.com/Slashgear). It covers engineering management, frontend performance, build tooling (webpack, Vite, esbuild), and more — mostly in French, with some posts translated to English.

## Tech stack

- [Astro](https://astro.build/) 7 with content collections
- [React](https://react.dev/) for interactive islands (search, cards)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [TypeScript](https://www.typescriptlang.org/)
- [Bun](https://bun.sh/) as the package manager and runtime for tests
- Deployed to [GitHub Pages](https://pages.github.com/)

## Features

- Bilingual articles (French/English) with reciprocal `hreflang` links
- Full-text search powered by [Fuse.js](https://www.fusejs.io/)
- Automatic table of contents per article
- Generated Open Graph images ([Satori](https://github.com/vercel/satori))
- Enriched sitemap (`lastmod`, `changefreq`, `priority`)
- Content collections for blog posts, conferences, podcasts and friends
- Lighthouse budgets and accessibility (pa11y) audits in CI

## Getting started

Prerequisites: [Bun](https://bun.sh/) (see `packageManager` in `package.json`).

```sh
bun install
bun run dev
```

Open [http://localhost:4321](http://localhost:4321).

### Useful scripts

| Command                | Description                                     |
| ---------------------- | ----------------------------------------------- |
| `bun run dev`          | Start the dev server (`astro dev`)              |
| `bun run build`        | Type-check with `astro check`, then build       |
| `bun run preview`      | Preview the production build locally            |
| `bun run sync`         | Generate the Astro content types (`astro sync`) |
| `bun run format`       | Format the codebase with oxfmt                  |
| `bun run format:check` | Check formatting without writing                |
| `bun run lint`         | Lint with oxlint                                |
| `bun test`             | Run unit tests                                  |
| `bun run a11y`         | Run pa11y accessibility checks on the sitemap   |

## Project structure

```
src/
  config.ts            # Site-wide configuration (author, socials, pagination)
  content.config.ts    # Content collection schemas
  pages/               # Routes (home, blog, tags, search, conferences, tools, ...)
  layouts/             # Astro layouts
  components/          # Astro & React components
  data/
    blog/              # Blog posts (one folder per post)
    conferences/       # Conference talks & workshops (YAML)
    podcasts/          # Podcast appearances (YAML)
    friends/           # Friend sites (JSON)
  utils/               # Content helpers and unit-tested utilities
```

## Contributing

Contributions, issues and feature requests are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md).

## Author

**Antoine Caron**

- Website: https://blog.slashgear.dev/
- Bluesky: [@slashgear.dev](https://bsky.app/profile/slashgear.dev)
- GitHub: [@Slashgear](https://github.com/Slashgear)
- LinkedIn: [Antoine Caron](https://www.linkedin.com/in/antoine-caron-slash/)

## License

Copyright © 2020 [Antoine Caron](https://github.com/Slashgear).<br />
This project is [MIT](LICENSE) licensed.
