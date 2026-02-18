import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import remarkMermaid from "remark-mermaidjs";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
      [
        remarkMermaid,
        {
          mermaidConfig: {
            theme: "base",
            themeVariables: {
              primaryColor: "#e0e7ff",
              primaryTextColor: "#1e1b4b",
              primaryBorderColor: "#6366f1",
              secondaryColor: "#dbeafe",
              secondaryTextColor: "#1e3a5f",
              secondaryBorderColor: "#3b82f6",
              tertiaryColor: "#f0fdf4",
              lineColor: "#334155",
              textColor: "#1e293b",
              mainBkg: "#e0e7ff",
              nodeBorder: "#6366f1",
              clusterBkg: "#f8fafc",
              clusterBorder: "#94a3b8",
              titleColor: "#0f172a",
              edgeLabelBackground: "#f8fafc",
              xyChart: {
                backgroundColor: "#ffffff",
                titleColor: "#0f172a",
                xAxisTitleColor: "#334155",
                yAxisTitleColor: "#334155",
                xAxisLabelColor: "#334155",
                yAxisLabelColor: "#334155",
                plotColorPalette: "#6366f1",
              },
            },
            flowchart: {
              htmlLabels: true,
              curve: "basis",
            },
          },
        },
      ],
    ],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: "min-light", dark: "night-owl" },
      wrap: true,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
});
