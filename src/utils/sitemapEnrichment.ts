import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { ChangeFreqEnum } from "@astrojs/sitemap";
import type { SitemapItem } from "@astrojs/sitemap";

/**
 * Build a map of post path -> lastmod by reading the blog frontmatter directly.
 *
 * `getCollection` is not available in `astro.config.ts` (the content layer is
 * not initialized yet when the config is evaluated), so we parse the
 * `pubDatetime`/`modDatetime` fields of every post file under
 * `src/data/blog` (folder per post, "index.md" in each).
 *
 * The folder name is the post slug, which matches the page path of the form
 * "/posts/" + slug + "/".
 */
export function getPostLastmodMap(): Map<string, string> {
  const blogDir = join(process.cwd(), "src", "data", "blog");
  const map = new Map<string, string>();

  const readDate = (content: string, field: "pubDatetime" | "modDatetime") => {
    const prefix = field + ":";
    const line = content.split("\n").find((l) => l.startsWith(prefix));
    const value = line
      ?.slice(prefix.length)
      .trim()
      .replace(/^["']|["']$/g, "");
    if (!value || Number.isNaN(new Date(value).getTime())) return undefined;
    return new Date(value).toISOString();
  };

  for (const entry of readdirSync(blogDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const file = join(blogDir, entry.name, "index.md");
    const content = readFileSync(file, "utf8");
    const lastmod = readDate(content, "modDatetime") ?? readDate(content, "pubDatetime");
    if (lastmod) map.set(`/posts/${entry.name}/`, lastmod);
  }

  return map;
}

/**
 * Enrich a sitemap entry with lastmod, changefreq and priority based on the
 * page's path. Non-blog pages have no reliable date source, so they keep no
 * `lastmod` rather than fabricating one.
 */
export function serializeSitemapItem(
  item: SitemapItem,
  postLastmod: Map<string, string>,
): SitemapItem {
  const pathname = new URL(item.url).pathname;

  if (pathname === "/") {
    item.changefreq = ChangeFreqEnum.WEEKLY;
    item.priority = 1.0;
  } else if (pathname === "/posts/") {
    item.changefreq = ChangeFreqEnum.WEEKLY;
    item.priority = 0.8;
  } else if (postLastmod.has(pathname)) {
    item.lastmod = postLastmod.get(pathname);
    item.changefreq = ChangeFreqEnum.MONTHLY;
    item.priority = 0.7;
  } else {
    item.changefreq = ChangeFreqEnum.YEARLY;
    item.priority = 0.5;
  }

  return item;
}
