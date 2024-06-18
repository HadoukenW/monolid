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
    urlPath: z.string().optional(),
  }),
});
const catalog = defineCollection({
  schema: ({ image }) => z.object({
    url: z.string().optional(),
    cottageUrl: z.string().optional(),
    title: z.string().optional(),
    city: z.string(),
    titleForLayots: z.string().optional(),
    description: z.string().optional(),
    location: z.string().optional(),
    year: z.string().optional(),
    buildingType: z.string().optional(),
    heroImage: image().optional(),
    aboutSectionData: z.array(z.object({
      title: z.string(),
      text: z.string(),
      image: z.string().optional(),
      video: z.string().optional(),
    })).optional(),
    layoutsSectionData: z.array(z.object({
      title: z.string().optional(),
      image: z.string(),
      rooms: z.string().optional(),
      price: z.string().optional(),
    })).optional(),
    kvartal2N1: z.array(z.string()).optional(),
    kvartal3N1: z.array(z.string()).optional(),
    kvartal5N1: z.array(z.string()).optional(),
    kvartalParkovka: z.array(z.string()).optional(),
    
    galleryImages: z.array(z.string()).optional(),
    mapStatic: z.object({
      mapLink: z.string().optional(),
      mapPath: z.string().optional(),
    }).optional(),
    isInProgress: z.string().optional(),
    isCottage: z.boolean().optional(),
    buildingProcess: z.array(z.string()).optional(),
  }),
});
export const collections = {
  'homepage': homepage,
  'newBuildings': newBuildings,
  'catalog': catalog,
};