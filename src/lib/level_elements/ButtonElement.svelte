<script lang="ts">
	import type { ButtonElement } from '$lib/types';
	export let element: ButtonElement;

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
