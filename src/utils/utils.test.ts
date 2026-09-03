import { describe, expect, it } from "bun:test";
import type { CollectionEntry } from "astro:content";
import { slugifyStr, slugifyAll } from "./slugify";
import postFilter from "./postFilter";
import getSortedPosts from "./getSortedPosts";
import getUniqueTags from "./getUniqueTags";

type Blog = CollectionEntry<"blog">;

const DAY = 24 * 60 * 60 * 1000;

/** Minimal blog entry with only the fields the utils actually read. */
function post(id: string, data: Partial<Blog["data"]> & { pubDatetime: Date }): Blog {
  return {
    id,
    collection: "blog",
    data: { title: id, description: id, tags: ["others"], ...data },
  } as Blog;
}

describe("slugifyStr", () => {
  it("kebab-cases titles", () => {
    expect(slugifyStr("Hello World")).toBe("hello-world");
    expect(slugifyStr("Astro 7 & Bun!")).toBe("astro-7-bun");
  });
  it("slugifyAll maps over an array", () => {
    expect(slugifyAll(["A B", "C_D"])).toEqual(["a-b", "c-d"]);
  });
});

describe("postFilter", () => {
  it("drops drafts", () => {
    expect(postFilter(post("d", { pubDatetime: new Date(Date.now() - DAY), draft: true }))).toBe(
      false,
    );
  });
  it("keeps published past posts", () => {
    expect(postFilter(post("p", { pubDatetime: new Date(Date.now() - DAY) }))).toBe(true);
  });
  it("drops posts scheduled beyond the margin (outside dev)", () => {
    // import.meta.env.DEV is falsy under `bun test`
    expect(postFilter(post("future", { pubDatetime: new Date(Date.now() + DAY) }))).toBe(false);
  });
});

describe("getSortedPosts", () => {
  it("sorts by modDatetime ?? pubDatetime, most recent first", () => {
    const a = post("a", { pubDatetime: new Date("2024-01-01") });
    const b = post("b", { pubDatetime: new Date("2024-06-01") });
    const c = post("c", {
      pubDatetime: new Date("2024-02-01"),
      modDatetime: new Date("2024-12-01"),
    });
    expect(getSortedPosts([a, b, c]).map((p) => p.id)).toEqual(["c", "b", "a"]);
  });
  it("excludes drafts and future posts", () => {
    const live = post("live", { pubDatetime: new Date(Date.now() - DAY) });
    const draft = post("draft", { pubDatetime: new Date(Date.now() - DAY), draft: true });
    const future = post("future", { pubDatetime: new Date(Date.now() + 10 * DAY) });
    expect(getSortedPosts([live, draft, future]).map((p) => p.id)).toEqual(["live"]);
  });
});

describe("getUniqueTags", () => {
  it("dedupes by slug, sorts alphabetically, keeps the display name", () => {
    const posts = [
      post("1", { pubDatetime: new Date(Date.now() - DAY), tags: ["Web Perf", "astro"] }),
      post("2", { pubDatetime: new Date(Date.now() - DAY), tags: ["web perf", "Astro"] }),
    ];
    expect(getUniqueTags(posts)).toEqual([
      { tag: "astro", tagName: "astro" },
      { tag: "web-perf", tagName: "Web Perf" },
    ]);
  });
  it("ignores tags from filtered-out posts", () => {
    const posts = [
      post("keep", { pubDatetime: new Date(Date.now() - DAY), tags: ["kept"] }),
      post("drop", { pubDatetime: new Date(Date.now() - DAY), draft: true, tags: ["hidden"] }),
    ];
    expect(getUniqueTags(posts).map((t) => t.tag)).toEqual(["kept"]);
  });
});
