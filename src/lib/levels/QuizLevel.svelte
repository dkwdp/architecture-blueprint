<script lang="ts">
  export let data:any;
  let selected:number[] = [];
  const check = () =>
    alert(`Score: ${data.level.questions.reduce((s,q,i)=>s+(selected[i]===q.answer?1:0),0)}/${data.level.questions.length}`);
</script>

{#each data.level.questions as q,i}
  <fieldset class="mb-4">
    <legend class="font-semibold">{q.q}</legend>
    {#each q.choices as c, j}
      <label class="block">
        <input type="radio" name={`q${i}`} bind:group={selected[i]} value={j}/> {c}
      </label>
    {/each}
  </fieldset>
{/each}

<button class="px-3 py-2 rounded-lg shadow" on:click={check}>Submit</button>
