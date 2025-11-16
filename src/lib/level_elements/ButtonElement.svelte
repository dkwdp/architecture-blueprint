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

<style>
	button {
		color: #f6f4f1;
		cursor: pointer;
		background-color: #62DB6E;
		height: 80px;
		width: 200px;
		font-size: 40px;
		border-radius: 20px;
		border: 2px solid #306B36;
		font-family: "Changa One", sans-serif;
		box-shadow: 0px 6px #002b63;

		text-shadow:
            -1px -1px 0 #306B36,
             1px -1px 0 #306B36,
            -1px  1px 0 #306B36,
             1px  1px 0 #306B36;

		transition:
            transform 0.1s ease-out,
            box-shadow 0.1s ease-out;
        
	}
	button:hover{
		 transform: translateY(3px);
        box-shadow: 0px 3px #002b63;
	}
</style>

<button onclick="{openOrFocus}">{element.text}</button>
