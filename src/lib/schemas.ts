import { z } from 'zod';

export const MapStructure = z.object({
  id:z.string(),
  title:z.string(),
  background:z.string(),
  nodes:z.array(z.object({
    id:z.string(),
    title:z.string(),
    // type:LevelType,
    pos:z.tuple([z.number(),z.number()])
  })),
  edges:z.array(z.tuple([z.string(),z.string()]))
});

