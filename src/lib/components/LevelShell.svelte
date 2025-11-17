<script lang="ts">
  import type { Level } from '$lib/types';
  export let data: { level: Level, mapId: string };

	import VideoElement from '$lib/level_elements/VideoElement.svelte';
	import TextElement from '$lib/level_elements/TextElement.svelte';
	import InteractiveElement from '$lib/level_elements/InteractiveElement.svelte';
	import SwitchElement from '$lib/level_elements/SwitchElement.svelte';
	import ButtonElement from '$lib/level_elements/ButtonElement.svelte';
	import NextLevelButton from '$lib/level_elements/NextLevelButton.svelte';
	import { navigateToMap } from '$lib/helpers';

	function navBack() {
		navigateToMap();
	}
</script>

<div class="max-w-3xl space-y-4">
  <nav>
		<button on:click={navBack}>Map</button>
  </nav>
  <h1 class="text-2xl font-bold">{data.level.title}</h1>
	{#each data.level.elements as element, i (i)}
		{#if element.type === 'text'}
			<TextElement {element}/>
		{:else if element.type === 'video'}
			<VideoElement {element}/>
		{:else if element.type === 'interactive'}
			<InteractiveElement element={element} level={data.level} mapId={data.mapId}/>
		{:else if element.type === 'switch'}
			<SwitchElement {element}/>
		{:else if element.type === 'button'}
			<ButtonElement {element}/>
		{/if}
	{/each}

	{#if data.level.next_level}
		<NextLevelButton levelId={data.level.next_level} />
	{/if}

  <slot/>
</div>
