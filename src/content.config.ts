import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Testi lunghi (regolamento, privacy): un file Markdown per lingua, es. it/regolamento.md
const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { legal };
