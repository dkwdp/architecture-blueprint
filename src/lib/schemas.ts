import { z } from 'zod';

export const LevelType = z.enum(['video','text','quiz','interactive','switch']);

export const LevelId = z.union([
	z.object({
		levelId: z.string(),
		mapId: z.string().optional(),
		serverUrl: z.url().optional(),
	}),
	z.string()
]).nullable();

export const LevelBase = z.object({
	id: z.string(),
	title: z.string(),
	type: LevelType,
	next_level: LevelId,
});

export const LevelContent = z.discriminatedUnion('type', [
	LevelBase.extend({
		type: z.literal('video'),
		video_url: z.url(),
		start_button_url: z.url(),
	}),
	LevelBase.extend({
		type: z.literal('text'),
		markdown: z.string()
	}),
	/*
	LevelBase.extend({
		type: z.literal('quiz'),
		questions: z.array(z.object({
			q: z.string(),
			choices: z.array(z.string()).min(2),
			answer: z.number().int()
		}))
	}),
	 */
	LevelBase.extend({
		type: z.literal('interactive'),
		entrypoint: z.string(),
	}),
	LevelBase.extend({
		type: z.literal('switch'),
		next_level: z.array(LevelId),
	})
]);

export const MapStructure = z.object({
  id: z.string(),
  title: z.string(),
  background: z.string(),
  levels: z.array(z.object({
    id: z.string(),
    title: z.string(),
    type: LevelType,
    pos: z.tuple([z.int(),z.int()])
  })),
  tiles: z.array(z.string())
});

