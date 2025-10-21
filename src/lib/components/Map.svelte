<script lang="ts">
	import { resolve } from '$app/paths';
  import type { MapStructure } from '$lib/types';
  export let structure: MapStructure;

</script>

<div class="relative w-full max-w-4xl">
	<ul>
		{#each structure.nodes as n (n.id)}
			<li>
				<a href={resolve(`/map/${structure.id}/level/${n.id}`)}>{n.title}</a>
			</li>
		{/each}
	</ul>
</div>
