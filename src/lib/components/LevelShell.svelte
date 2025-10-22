<script lang="ts">
  import type { LevelContent } from '$lib/types';
  export let data: { level: LevelContent };
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	function navigateToMap() {
		// The path is currently something like '/map/01/level/intro'
		const segments = page.url.pathname.split('/').filter(Boolean);

		// Remove the last two segments ('level' and 'intro')
		// The remaining segments are ['map', '01']
		segments.pop(); // Removes 'intro'
		segments.pop(); // Removes 'level'

		// Join them back and prepend the leading slash to get '/map/01'
		const targetPath: string = '/' + segments.join('/');

		goto(resolve(targetPath));
	}
</script>

<div class="max-w-3xl space-y-4">
  <nav>
		<button on:click={navigateToMap}>Go to Map Parent</button>
  </nav>
  <h1 class="text-2xl font-bold">{data.level.title}</h1>
  <slot/>
</div>
