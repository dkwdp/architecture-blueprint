import type { LevelId } from '$lib/types';

export function normalize_level_id(level_id: LevelId, current_map: string): string {
	if (level_id == null) {
		throw new Error("goto_level_id: level_id is null");
	}

	let id_level: string;
	let id_map: string;
	let server_url: string | null = null;

	if (typeof level_id === "string") {
		id_level = level_id;
		id_map = current_map;
	} else if (typeof level_id === "object") {
		id_level = level_id.levelId;
		id_map = level_id.mapId ?? current_map;
		if (level_id.serverUrl) {
			server_url = level_id.serverUrl;
		}
	} else {
		throw new Error("goto_level_id: level_id is not a string or object");
	}

	if (server_url) {
		return "https://" + server_url + "/map/" + id_map + "/level/" + id_level;
	} else {
		return "/map/" + id_map + "/level/" + id_level;
	}
}