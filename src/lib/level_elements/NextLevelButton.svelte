<script lang="ts">
	import type { LevelId } from '$lib/types';
	import { normalize_and_goto } from '$lib/helpers';
	import { page } from '$app/state';
	export let levelId: LevelId;

	function openLevelId() {
		if (page.params.mapId == null) throw new Error('mapId is null');
		normalize_and_goto(levelId, page.params.mapId);
	}

</script>

<style>
	button {
		color: #004C61;
		cursor: pointer;
		background-color: #43AAC4;
		height: 28rem;
		width: 6rem;
		font-size: 5rem;
		border-radius: 8px;
		border: 2px solid #004C61;
		font-family: "Changa One", sans-serif;
		box-shadow: 0px 6px #002b63;
		justify-content: center;

		transition:
            transform 0.1s ease-out,
            box-shadow 0.1s ease-out;
        
	}
	button:hover{
		 transform: translateY(3px);
        box-shadow: 0px 3px #002b63;
	}
</style>

<button onclick="{openLevelId}" class="mdi mdi-arrow-right-thick"></button>
