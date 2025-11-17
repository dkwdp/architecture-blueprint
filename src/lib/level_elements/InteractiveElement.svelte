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

	const scriptUrl = `/content/${mapId}/levels/${level.id}/${element.entrypoint}`;
	console.log('scriptUrl', scriptUrl);

	async function loadTutorial() {
		const response = await fetch(scriptUrl);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const scriptCode = await response.text();
		const outputFrame = document.getElementById('output-frame');

		// create HTML
		const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
		<style>body { margin: 0; overflow: hidden; }</style>
</head>
<body>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.1/p5.min.js"><\/script>
<script>${scriptCode}<\/script>
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
	<iframe title="Tutorial Window" style="width: 60%; height: calc(60vw * 9/16);" id="output-frame"></iframe>
</div>