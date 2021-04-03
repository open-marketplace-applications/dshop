<script lang="ts">
	import { onMount } from 'svelte'
	import { getAvailableAmount } from '../api/shop'

	// let count: number = 0;

	let count

	onMount(async () => {
		console.log("counter")
		count = await getAvailableAmount()
	})
</script>


<div>
	{#if count}
		<p>Amount: {count}</p>
	{:else}
		<p>loading.....</p>
	{/if}
</div>
