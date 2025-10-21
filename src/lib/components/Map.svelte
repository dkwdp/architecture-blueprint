<script lang="ts">
  import type { MapStructure } from '$lib/types';
  export let structure: MapStructure;

</script>

<div class="relative w-full max-w-4xl">
	<ul>
		{#each structure.nodes as n}
			<li>
				<a
					href={`/map/${structure.id}/level/${n.id}`}
				>{n.title}</a>
			</li>
		{/each}
	</ul>
</div>
