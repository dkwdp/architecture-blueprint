<script lang="ts">
  import type { Level } from '$lib/types';
  export let data: { level: Level, mapId: string };
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	console.log(data);

	import VideoElement from '$lib/level_elements/VideoElement.svelte';
	import TextElement from '$lib/level_elements/TextElement.svelte';
	import InteractiveElement from '$lib/level_elements/InteractiveElement.svelte';
	import SwitchElement from '$lib/level_elements/SwitchElement.svelte';
	import ButtonElement from '$lib/level_elements/ButtonElement.svelte';

	const element_registry = {
		video: VideoElement,
		text: TextElement,
		interactive: InteractiveElement,
		switch: SwitchElement,
		button: ButtonElement,
	};

	function navigateToMap() {
		// The path is currently something like '/map/01/level/intro'
		const segments = page.url.pathname.split('/').filter(Boolean);

		// Remove the last two segments
		segments.pop();
		segments.pop();

		// Join them back and prepend the leading slash to get '/map/01'
		const targetPath: string = '/' + segments.join('/');

		goto(resolve(targetPath));
	}
</script>

<div class="max-w-3xl space-y-4">
  <nav>
		<button on:click={navigateToMap}>Map</button>
  </nav>
  <h1 class="text-2xl font-bold">{data.level.title}</h1>
	{#each data.level.elements as element, i (i)}
		{#if element.type === 'text'}
			<TextElement {element}/>
		{:else if element.type === 'video'}
			<VideoElement {element}/>
		{:else if element.type === 'interactive'}
			<InteractiveElement {element}/>
		{:else if element.type === 'switch'}
			<SwitchElement {element}/>
		{:else if element.type === 'button'}
			<ButtonElement {element}/>
		{/if}
	{/each}

  <slot/>
</div>
