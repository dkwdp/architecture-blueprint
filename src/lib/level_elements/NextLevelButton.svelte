<script lang="ts">
	import type { LevelId } from '$lib/types';
	import { normalize_level_id } from '$lib/helpers';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	export let levelId: LevelId;

	function openLevelId() {
		if (page.params.mapId == null) throw new Error('mapId is null');
		const levId = normalize_level_id(levelId, page.params.mapId);
		goto(resolve(levId));
	}

</script>

<button onclick="{openLevelId}">nextLevel</button>
