<script lang="ts">
  import Map from '$lib/components/Map.svelte';
  export let data: { structure:any };
</script>

<h2 class="text-2xl font-semibold mb-4">{data.structure.title}</h2>
<Map structure={data.structure}/>
