// Generated by ts-to-zod
import { z } from "zod";

export const panoSchema = z.object({
  pano: z.object({
    pano: z.string(),
    pov: z.object({
      heading: z.number(),
      pitch: z.number(),
      zoom: z.number(),
    }),
  }),
  position: z.object({
    lat: z.number(),
    long: z.number(),
  }),
});
