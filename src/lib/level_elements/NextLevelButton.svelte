<script lang="ts">
	import type { LevelId } from '$lib/types';
	import { normalize_and_goto } from '$lib/helpers';
	import { page } from '$app/state';
	export let levelId: LevelId;

	function openLevelId() {
		if (page.params.mapId == null) throw new Error('mapId is null');
		normalize_and_goto(levelId, page.params.mapId);
	}

</script>

<button onclick="{openLevelId}">nextLevel</button>
