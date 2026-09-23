import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import tailwindcss from "@tailwindcss/vite";
import type { Element, Root } from "hast";
import { SITE } from "./src/config";
import { shouldIncludeInSitemap } from "./src/utils/sitemapFilter";
import { getPostLastmodMap, serializeSitemapItem } from "./src/utils/sitemapEnrichment";

const postLastmod = getPostLastmodMap();

function wrapTables() {
  return (tree: Root) => {
    const transform = (parent: Element | Root) => {
      for (let i = 0; i < parent.children.length; i++) {
        const child = parent.children[i];
        if (child.type !== "element") continue;
        if (child.tagName === "table") {
          parent.children[i] = {
            type: "element",
            tagName: "div",
            properties: { className: ["table-wrapper"] },
            children: [child],
          };
        } else {
          transform(child);
        }
      }
    };
    transform(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    react(),
    sitemap({
      filter: (page) => shouldIncludeInSitemap(new URL(page).pathname),
      serialize: (item) => serializeSitemapItem(item, postLastmod),
    }),
  ],
  markdown: {
    processor: unified({
      remarkPlugins: [
        remarkToc,
        [
          remarkCollapse,
          {
            test: "Table of contents",
          },
        ],
      ],
      rehypePlugins: [wrapTables],
    }),
    shikiConfig: {
      themes: { light: "min-light", dark: "night-owl" },
      wrap: true,
    },
  },
  image: {
    layout: "constrained",
    responsiveStyles: true,
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
});
