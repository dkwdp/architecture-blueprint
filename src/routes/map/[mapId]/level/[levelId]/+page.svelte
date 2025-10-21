<script lang="ts">
  import LevelShell from '$lib/components/LevelShell.svelte';
  import VideoLevel from '$lib/levels/VideoLevel.svelte';
  import TextLevel from '$lib/levels/TextLevel.svelte';
  import QuizLevel from '$lib/levels/QuizLevel.svelte';
  import InteractiveLevel from '$lib/levels/InteractiveLevel.svelte';
  import SwitchPoint from '$lib/levels/SwitchPoint.svelte';
  import type { LevelContent, LevelType } from '$lib/types';
  export let data: { level: LevelContent, mapId: string };

  const registry: Record<LevelType, any> = {
    video: VideoLevel,
    text: TextLevel,
    quiz: QuizLevel,
    interactive: InteractiveLevel,
    switch: SwitchPoint
  };
</script>

<LevelShell {data}>
  <svelte:component this={registry[data.level.type]} {data}/>
</LevelShell>
