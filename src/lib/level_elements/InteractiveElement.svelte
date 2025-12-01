<script lang="ts">
	/* eslint-disable no-useless-escape */
	import { onMount } from 'svelte';
	import type { InteractiveElementData, Level } from '$lib/types';

	interface Props {
		element: InteractiveElementData;
		level: Level;
		mapId: string;
	}
  let { element, level, mapId } = $props() as Props;

	async function loadTutorial() {
		const outputFrame = document.getElementById('output-frame');
		const scriptUrl = `${window.location.origin}/content/${mapId}/levels/${level.id}/${element.entrypoint}`;

		// create HTML
		const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
		<style>body { margin: 0; overflow: hidden; }</style>
</head>
<body>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.1/p5.min.js"><\/script>
<script src="${scriptUrl}"><\/script>
</body>
</html>
`;

		// encode to use in iframe
		const dataUri = 'data:text/html;charset=utf-8,' + encodeURIComponent(htmlContent);

		if (outputFrame && outputFrame instanceof HTMLIFrameElement) {
			outputFrame.src = dataUri;
		} else {
			console.error('Failed to find the output frame element.');
		}
	}

	onMount(() => {
		loadTutorial();
	});

</script>

<div id="output-container" style="display: flex; justify-content: center;">
	<iframe title="Tutorial Window" sandbox="allow-scripts" style="width: 60%; height: calc(60vw * 9/16);" id="output-frame"></iframe>
</div>