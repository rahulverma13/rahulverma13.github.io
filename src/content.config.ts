import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every folder in src/content/projects/<slug>/ with an index.mdx is one project.
const projects = defineCollection({
  loader: glob({ pattern: '*/index.mdx', base: './src/content/projects', generateId: ({ entry }) => entry.split('/')[0] }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      order: z.number(),
      status: z.enum(['published', 'draft']).default('published'),
      summary: z.string(),
      // Short line shown on the home page tab, e.g. "Solo project" or "Team project · CAD lead"
      roleBadge: z.string(),
      // Longer sentence shown at the top of the project page
      roleDetail: z.string(),
      domains: z.array(z.enum(['Mechanical', 'Electrical', 'Software'])),
      tags: z.array(z.string()),
      highlights: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      facts: z.object({
        role: z.string().optional(),
        timeline: z.string().optional(),
        team: z.string().optional(),
        tools: z.string().optional(),
      }),
      award: z.string().optional(),
      // Optional jump link under the summary, e.g. { text: 'See the math below', href: '#the-math' }
      pointer: z.object({ text: z.string(), href: z.string() }).optional(),
      hero: image(),
      heroAlt: z.string(),
      // 'plate' puts transparent CAD renders on a light drafting panel; 'photo' fills the frame; 'dark' for dark artwork
      heroStyle: z.enum(['plate', 'photo', 'dark', 'glow']).default('photo'),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      coverStyle: z.enum(['plate', 'photo', 'dark', 'glow']).optional(),
      links: z.array(z.object({ label: z.string(), href: z.string(), kind: z.string().optional() })).default([]),
    }),
});

export const collections = { projects };
