<script lang="ts">
	import { resolve } from '$app/paths';
  import type { MapStructure } from '$lib/types';
  export let structure: MapStructure;

</script>

<div>
	<h1>{structure.title}</h1>
	<ul>
		{#each structure.levels as n (n.id)}
			<li>
				<a href={resolve(`/map/${structure.id}/level/${n.id}`)}>{n.title}</a>
			</li>
		{/each}
	</ul>
</div>
