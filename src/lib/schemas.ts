import { z } from 'zod';

export const LevelType = z.enum(['video','text','quiz','interactive','switch']);

export const LevelBase = z.object({
  id:z.string(),
  title:z.string(),
  type:LevelType,
  prerequisites:z.array(z.string()).optional(),
  rewardXP:z.number().optional()
});

export const LevelContent = z.discriminatedUnion('type', [
  LevelBase.extend({
    type:z.literal('video'),
    url:z.string().url(),
    transcript:z.string().optional()
  }),
  LevelBase.extend({
    type:z.literal('text'),
    markdown:z.string()
  }),
  LevelBase.extend({
    type:z.literal('quiz'),
    questions:z.array(z.object({
      q:z.string(),
      choices:z.array(z.string()).min(2),
      answer:z.number().int()
    }))
  }),
  LevelBase.extend({
    type:z.literal('interactive'),
    module:z.string(),
    props:z.record(z.unknown()).optional()
  }),
  LevelBase.extend({
    type:z.literal('switch'),
    goto:z.object({ mapId:z.string(), levelId:z.string() })
  })
]);

export const MapStructure = z.object({
  id:z.string(),
  title:z.string(),
  background:z.string(),
  nodes:z.array(z.object({
    id:z.string(),
    title:z.string(),
    type:LevelType,
    pos:z.tuple([z.number(),z.number()])
  })),
  edges:z.array(z.tuple([z.string(),z.string()]))
});
