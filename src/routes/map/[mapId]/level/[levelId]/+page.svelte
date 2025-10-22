<script lang="ts">
  import LevelShell from '$lib/components/LevelShell.svelte';
  import VideoLevel from '$lib/levels/VideoLevel.svelte';
  import TextLevel from '$lib/levels/TextLevel.svelte';
  import InteractiveLevel from '$lib/levels/InteractiveLevel.svelte';
  import SwitchLevel from '$lib/levels/SwitchLevel.svelte';
  import type { LevelContent } from '$lib/types';
  export let data: { level: LevelContent, mapId: string };

  const registry = {
    video: VideoLevel,
    text: TextLevel,
    interactive: InteractiveLevel,
    switch: SwitchLevel
  };
</script>

<LevelShell {data}>
  <svelte:component this={registry[data.level.type]} {data}/>
</LevelShell>

