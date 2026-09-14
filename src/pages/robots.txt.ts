import type { APIRoute } from "astro";
import { SITE } from "@config";

const robots = `
User-agent: *
Allow: /
Content-Signal: ai-train=no, search=yes, ai-input=no

Sitemap: ${new URL("sitemap-index.xml", SITE.website).href}
`.trim();

export const GET: APIRoute = () =>
  new Response(robots, {
    headers: { "Content-Type": "text/plain" },
  });
