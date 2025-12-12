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

<button onclick={openOrFocus}>{element.text}</button>

<style>
	button {
		color: #f6f4f1;
		cursor: pointer;
		background-color: #29be1a;
		height: 5rem;
		width: 13rem;
		font-size: 3rem;
		border-radius: 2rem;
		border: 2px solid #306b36;
		font-family: 'Changa One', sans-serif;
		box-shadow: 0px 6px #0b3307;

		text-shadow:
			-1px -1px 0 #306b36,
			1px -1px 0 #306b36,
			-1px 1px 0 #306b36,
			1px 1px 0 #306b36;

		transition:
			transform 0.1s ease-out,
			box-shadow 0.1s ease-out;
	}
	button:hover {
		transform: translateY(3px);
		box-shadow: 0px 3px #0b3307;
	}
</style>
