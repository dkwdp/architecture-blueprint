<script lang="ts">
  export let data:any;
  const go = () =>
    location.href = `/map/${data.level.goto.mapId}/level/${data.level.goto.levelId}`;
</script>

<button class="px-3 py-2 rounded-lg shadow" on:click={go}>
  Go to {data.level.goto.mapId}:{data.level.goto.levelId}
</button>
