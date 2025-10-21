import { z } from 'zod';

export const LevelType = z.enum(['video','text','quiz','interactive','switch']);

export const MapStructure = z.object({
  id: z.string(),
  title: z.string(),
  background: z.string(),
  nodes: z.array(z.object({
    id: z.string(),
    title: z.string(),
    type: LevelType,
    pos: z.tuple([z.int(),z.int()])
  })),
  tiles: z.array(z.string())
});

