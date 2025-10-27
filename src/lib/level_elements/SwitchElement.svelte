<script lang="ts">
	import type { SwitchElement } from '$lib/types';
	import { normalize_and_goto, normalize_level_id } from '$lib/helpers';
	import { page } from '$app/state';

	export let element: SwitchElement;

  function go() {
		if (element.next_level) {
			normalize_and_goto(element.next_level, page.params.mapId);
		}
	}
</script>

<button class="px-3 py-2 rounded-lg shadow" on:click={go}>
	Nice description of level {normalize_level_id(element.next_level, page.params.mapId)}.
</button>
