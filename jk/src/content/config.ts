import { defineCollection, z } from "astro:content";

const homepage = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: image(),
  }),
});
const newBuildings = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    location: z.string(),
    year: z.string(),
    buildingType: z.string(),
    image: image(),
  }),
});
const catalog = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    location: z.string(),
    year: z.string(),
    buildingType: z.string(),
    heroImage: image(),
  }),
});
export const collections = {
  'homepage': homepage,
  'newBuildings': newBuildings,
  'catalog': catalog,
};