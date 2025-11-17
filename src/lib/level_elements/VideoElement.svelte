<script lang="ts">
	import type { VideoElementData } from '$lib/types';

	export let element: VideoElementData;
</script>

<!--
<video class="w-full rounded" controls src={data.level.url}><track src="" kind="captions" /></video>
{#if data.level.transcript}
  <details><summary>Transcript</summary><pre>{data.level.transcript}</pre></details>
{/if}
<iframe width="1298" height="730" src="{data.video_url}" title="{data.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
-->
<iframe width="1024" height="576" src="{element.url}" title="Some Video" allow="web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
