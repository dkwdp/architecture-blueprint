<script lang="ts">
  import Map from '$lib/components/Map.svelte';
  export let data: { structure: any };
</script>

<Map structure={data.structure}/>
