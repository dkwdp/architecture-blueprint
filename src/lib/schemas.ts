import { z } from 'zod';

export const ElementType = z.enum(
	['video','text','quiz','interactive','switch','button']
);

export const LevelId = z.union([
	z.object({
		levelId: z.string(),
		mapId: z.string().optional(),
		serverUrl: z.url().optional(),
	}),
	z.string()
]).nullable();

export const ElementBase = z.object({
	type: ElementType,
});

export const LevelElement = z.discriminatedUnion('type', [
	ElementBase.extend({
		type: z.literal('video'),
		url: z.url(),
	}),
	ElementBase.extend({
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
	ElementBase.extend({
		type: z.literal('interactive'),
		entrypoint: z.string(),
	}),
	ElementBase.extend({
		type: z.literal('switch'),
		next_level: LevelId,
	}),
	ElementBase.extend({
		type: z.literal('button'),
		url: z.url(),
		text: z.string(),
		target: z.string().optional(),
	})
]);

export const MapStructure = z.object({
  id: z.string(),
  title: z.string(),
  background: z.string(),
  levels: z.array(z.object({
    id: z.string(),
    title: z.string(),
    pos: z.tuple([z.int(),z.int()])
  })),
  tiles: z.array(z.string())
});

export const Level = z.object({
	id: z.string(),
	title: z.string(),
	next_level: LevelId,
	elements: z.array(LevelElement),
});

