import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const toursCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: "./src/content/tours" }),
  schema: z.object({
    slug: z.string(),
    category: z.string(),
    price: z.string(),
    image: z.string(),
    rating: z.number().optional(),
    gallery: z.array(z.string()).optional(),
    en: z.any(),
    es: z.any()
  })
});

export const collections = {
  'tours': toursCollection,
};
