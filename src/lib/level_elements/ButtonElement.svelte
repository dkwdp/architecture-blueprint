<script lang="ts">
	import type { ButtonElementData } from '$lib/types';
	export let element: ButtonElementData;

	let openWindow: WindowProxy | null = null;

	function openOrFocus() {
		if (openWindow && !openWindow.closed) {
			openWindow.focus();
		} else {
			openWindow = window.open(element.url, element.target);
		}
	}
</script>

<button onclick="{openOrFocus}">{element.text}</button>
