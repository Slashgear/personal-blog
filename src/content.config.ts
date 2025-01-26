import { SITE } from "@config";
import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content_layer",
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      language: z.string().optional(),
    }),
});

const friends = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/friends" }),
  schema: z.object({
    name: z.string(),
    site: z.string(),
    image: z.string(),
  }),
});

const conferences = defineCollection({
  loader: glob({ pattern: "**/*.yml", base: "./src/data/conferences" }),
  schema: z.object({
    title: z.string(),
    lang: z.enum(["fr", "en"]),
    year: z.number(),
    description: z.string(),
    events: z.array(
      z.object({
        name: z.string(),
        date: z.number(),
        site: z.string().optional(),
        link: z.string().optional(),
        video: z.string().optional(),
      })
    ),
    cospeaker: z
      .array(z.object({ name: z.string(), site: z.string() }))
      .optional(),
  }),
});

export const collections = { blog, friends, conferences };
