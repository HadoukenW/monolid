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
    heroImage: image().optional(),
    aboutSectionData: z.array(z.object({
      title: z.string(),
      text: z.string(),
      image: z.string(),
    })).optional(),
    layoutsSectionData: z.array(z.object({
      title: z.string(),
      image: z.string(),
    })).optional(),
    galleryImages: z.array(z.string()).optional(),
    mapLocation: z.string().optional(),
  }),
});
export const collections = {
  'homepage': homepage,
  'newBuildings': newBuildings,
  'catalog': catalog,
};