import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['hardware', 'software']),
    techStack: z.array(z.string()),
    hardwares: z.array(z.string()).optional(),
    githubUrl: z.string().url(),
    media: z.array(z.object({
      type: z.enum(['image', 'video']),
      url: z.string()
    })).optional(),
  }),
});

export const collections = { projects };