<script lang="ts">
  import LevelShell from '$lib/components/LevelShell.svelte';
	import type { Level } from '$lib/types';
  export let data: { level: Level, mapId: string };

</script>

<LevelShell {data}>
</LevelShell>

