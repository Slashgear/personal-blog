import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import getSortedPosts from "@utils/getSortedPosts";
import { SITE } from "@config";

const siteUrl = (path: string) => new URL(path, SITE.website).href;

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);

  const postList = sortedPosts
    .map(({ data, id }) => {
      const description = data.description.replace(/\s+/g, " ").trim();
      return `- [${data.title}](${siteUrl(`posts/${id}/`)}): ${description}`;
    })
    .join("\n");

  const llmsTxt = `# ${SITE.title}

> ${SITE.desc}

## About

- [Resume](${siteUrl("resume/")}): Professional resume of ${SITE.author}
- [AI](${siteUrl("ai/")}): ${SITE.author}'s AI usage policy and manifesto
- [Conferences](${siteUrl("conferences/")}): Talks and workshops given by ${SITE.author}
- [Tools](${siteUrl("tools/")}): Tools and software used by ${SITE.author}
- [Friends](${siteUrl("friends/")}): Links to friends' websites

## Posts

${postList}
`.trim();

  return new Response(llmsTxt, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
