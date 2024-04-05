// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const articlesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    issue_number: z.number(),
  }),
});
const issuesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    issue_number: z.number(),
  }),
});

const cardsCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    art: z.number(),
  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  articles: articlesCollection,
  issues: issuesCollection,
};
