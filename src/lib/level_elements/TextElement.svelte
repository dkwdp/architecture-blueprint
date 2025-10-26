<script lang="ts">
	import type { TextElement } from "$lib/types";
	export let element: TextElement;
</script>

<div>
	{element.markdown}
</div>
