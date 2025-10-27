<script lang="ts">
  import Map from '$lib/components/Map.svelte';
	import type { MapStructure } from '$lib/types';
  export let data: { structure: MapStructure, mapId: string };
</script>

<Map structure={data.structure}/>
