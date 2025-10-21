<script lang="ts"> export let data:any; </script>

<video src={data.level.url} controls class="w-full rounded"></video>
{#if data.level.transcript}
  <details><summary>Transcript</summary><pre>{data.level.transcript}</pre></details>
{/if}
