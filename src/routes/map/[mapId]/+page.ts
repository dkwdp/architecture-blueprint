import type { MapStructure } from '$lib/types';
import { MapStructure as MapSchema } from '$lib/schemas';

export const load = async ({ params, fetch }) => {
  const res = await fetch(`/content/map${params.mapId}/structure.json`);
  if (!res.ok) throw new Error('map structure not found');
  const json = await res.json();
  const parsed = MapSchema.parse(json) as MapStructure;
  return { structure: parsed, mapId: params.mapId };
};
