import { SITE } from "@config";
import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "zod";

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
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      lang: z.enum(["fr", "en"]),
      year: z.number(),
      type: z.enum(["talk", "workshop"]).default("talk"),
      description: z.string(),
      image: image().optional(),
      events: z.array(
        z.object({
          name: z.string(),
          date: z.number(),
          site: z.string().optional(),
          link: z.string().optional(),
          video: z.string().optional(),
        }),
      ),
      cospeakers: z.array(z.object({ name: z.string(), site: z.string() })).optional(),
    }),
});

const podcasts = defineCollection({
  loader: glob({ pattern: "**/*.yml", base: "./src/data/podcasts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      show: z.string(),
      date: z.number(),
      link: z.string(),
      description: z.string().optional(),
      image: image().optional(),
    }),
});

export const collections = { blog, friends, conferences, podcasts };
