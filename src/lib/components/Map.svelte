<script lang="ts">
  import type { MapStructure } from '$lib/types';
  export let structure: MapStructure;

  const navigate = (levelId:string) =>
    location.href = `/map/${structure.id}/level/${levelId}`;
</script>

<div class="relative w-full max-w-4xl">
  <img src={structure.background} alt={structure.title} class="w-full rounded-xl" />
  {#each structure.nodes as n}
    <button
      class="absolute -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-lg shadow"
      style={`left:${n.pos[0]}px; top:${n.pos[1]}px`}
      on:click={() => navigate(n.id)}
      aria-label={n.title}
    >{n.title}</button>
  {/each}
</div>
