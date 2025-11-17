<script lang="ts">
	import type { TextElementData } from "$lib/types";
	export let element: TextElementData;
</script>

<div>
	{element.markdown}
</div>
