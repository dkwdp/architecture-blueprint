<script lang="ts">
	import type { ButtonElement } from '$lib/types';
	export let element: ButtonElement;

	let scratchWindow: WindowProxy | null = null;

	function openOrFocusScratch() {
		if (scratchWindow && !scratchWindow.closed) {
			scratchWindow.focus();
		} else {
			scratchWindow = window.open(element.url, element.target);
		}
	}
</script>

<button onclick="{openOrFocusScratch}">{element.text}</button>
