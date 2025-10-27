import type { LevelId } from '$lib/types';
import { goto } from '$app/navigation';
import { resolve } from '$app/paths';

export function normalize_level_id(
	level_id: LevelId,
	current_map: string | undefined
): { levelId: string; mapId: string; serverUrl: string | null } {
	if (!level_id) {
		throw new Error(`level_id is ${level_id}`);
	}
	if (current_map === undefined) throw new Error('current_map is undefined');


	let id_level: string;
	let id_map: string;
	let server_url: string | null = null;

	if (typeof level_id === 'string') {
		id_level = level_id;
		id_map = current_map;
	} else if (typeof level_id === 'object') {
		id_level = level_id.levelId;
		id_map = level_id.mapId ?? current_map;
		if (level_id.serverUrl) {
			server_url = level_id.serverUrl;
		}
	} else {
		throw new Error('goto_level_id: level_id is not a string or object');
	}

	return {
		levelId: id_level,
		mapId: id_map,
		serverUrl: server_url
	};
}

export function normalize_and_goto(
	level_id: LevelId,
	current_map: string | undefined
) {
	const { levelId, mapId } = normalize_level_id(level_id, current_map);
	goto(resolve(`/map/[mapId]/level/[levelId]`, { levelId, mapId })).catch(err => {
		console.error('Failed to go to level', levelId, 'in map', mapId, err)
	});
}