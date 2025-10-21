<script lang="ts">
  import type { LevelContent } from '$lib/types';
  import { progress } from '$lib/stores/progress';
  export let data: { level: LevelContent };
  const markDone = () => {
    progress.update(p => ({ ...p, [`${data.level.id}`]: true }));
  };
</script>

<div class="max-w-3xl space-y-4">
  <nav>
    <a class="underline" href="/">&larr; Home</a> ·
    <a class="underline" href={`/map/${data.level.id.split(':')[0] ?? ''}`}>Map</a>
  </nav>
  <h1 class="text-2xl font-bold">{data.level.title}</h1>
  <slot/>
  <button class="px-3 py-2 rounded-lg shadow" on:click={markDone}>Mark complete</button>
</div>
