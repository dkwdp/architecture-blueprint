<script lang="ts">
  import { page } from '$app/stores';
  const maps = [{ id:'map01', title:'Intro Map' }];
</script>

<h1 class="text-3xl font-bold">LearnMaps</h1>
<ul class="mt-4 list-disc pl-6">
  {#each maps as m}
    <li><a class="underline" href={`/map/${m.id}`}>{m.title}</a></li>
  {/each}
</ul>
