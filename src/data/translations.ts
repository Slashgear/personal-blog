/**
 * Posts published in both languages. Each pair is `[english id, french id]`
 * (the id is the folder name under `src/data/blog`).
 *
 * Used to emit reciprocal `<link rel="alternate" hreflang>` tags on the two
 * article pages, so search engines treat them as translations of one another
 * instead of near-duplicate competitors. Add a line when you translate a post.
 */
export const translationPairs: ReadonlyArray<readonly [en: string, fr: string]> = [
  ["docker-training", "cours-docker"],
  ["angular-training", "cours-angular"],
  ["en-use-reduced-motion", "use-reduced-motion"],
  ["learn-webpack", "formation-webpack-gratuite"],
  ["should-snowpack-replace-webpack", "que-vaut-snowpack"],
  ["vite-webpack-killer", "vitejs-concurrent-performant-webpack-pour-react"],
  ["esbuild-incredibly-fast-and-promising", "esbuild-bundler-incroyablement-rapide-et-prometteur"],
  ["react-redux-pitfalls-and-best-pratices", "react-redux-pieges-bonnes-pratiques"],
  [
    "why-you-should-use-compression-webpack-plugin",
    "pourquoi-vous-devriez-utiliser-le-compression-webpack-plugin",
  ],
  [
    "git-tip-why-you-should-not-keep-a-local-master-branch",
    "pourquoi-vous-ne-devriez-pas-maintenir-une-branche-master-locale",
  ],
  [
    "how-not-to-throw-away-your-web-application-after-two-years",
    "comment-ne-pas-jeter-son-application-au-bout-de-deux-ans",
  ],
  [
    "how-to-dynamically-run-step-on-each-github-pr-label",
    "comment-parralelliser-un-job-github-action-par-label",
  ],
  [
    "how-to-split-test-by-folder-with-github-action",
    "comment-lancer-des-actions-github-en-simultane-sur-des-sous-dossiers",
  ],
  [
    "how-to-deploy-on-github-pages-with-travis-ci",
    "comment-deployer-sur-github-pages-avec-travis-ci",
  ],
  [
    "how-to-setup-e2e-tests-with-webdriverio",
    "comment-mettre-en-place-des-tests-bout-en-bout-avec-webdriverio",
  ],
  ["generator-rancher-catalog", "un-generateur-pour-le-catalogue-de-rancher"],
  ["gol-tribute", "gol-hommage"],
  ["home-assistant-backup-scaleway", "sauvegarde-home-assistant-scaleway"],
];

export type PostAlternates = {
  self: "en" | "fr";
  otherLang: "en" | "fr";
  otherId: string;
};

/** Given a post id, return its translation counterpart, or null. */
export function getPostAlternates(id: string): PostAlternates | null {
  for (const [en, fr] of translationPairs) {
    if (id === en) return { self: "en", otherLang: "fr", otherId: fr };
    if (id === fr) return { self: "fr", otherLang: "en", otherId: en };
  }
  return null;
}
