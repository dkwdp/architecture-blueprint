import { LevelContent as LevelSchema } from '$lib/schemas';

export const load = async ({ params, fetch }) => {
  const res = await fetch(`/content/${params.mapId}/levels/${params.levelId}/content.json`);
  if (!res.ok) throw new Error('level content not found');
  const json = await res.json();
  const parsed = LevelSchema.parse(json);
  return { level: parsed, mapId: params.mapId };
};
