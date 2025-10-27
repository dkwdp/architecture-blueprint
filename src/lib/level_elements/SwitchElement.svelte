<script lang="ts">
	import type { SwitchElement } from '$lib/types';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { normalize_level_id } from '$lib/helpers';
	import { page } from '$app/state';

	export let element: SwitchElement;

  function go() {
		if (element.next_level) {
			const level_id: string = normalize_level_id(element.next_level, page.params.mapId);
			goto(resolve(level_id));
		}
	}
</script>

<button class="px-3 py-2 rounded-lg shadow" on:click={go}>
	Nice description of level {normalize_level_id(element.next_level, page.params.mapId)}.
</button>
