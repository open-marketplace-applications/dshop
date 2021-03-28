<script lang="ts">
	import { onMount } from 'svelte';
	import { getAvailableAmount, buyProduct } from '../api/shop';

	// let count: number = 0;

	let count;

	onMount(async () => {
		console.log("counter")
		count = await getAvailableAmount();
	});
</script>

<style lang="scss">
	button {
		font-family: inherit;
		font-size: inherit;
		padding: 1em 2em;
		color: #ff3e00;
		background-color: rgba(255, 62, 0, 0.1);
		border-radius: 2em;
		border: 2px solid rgba(255, 62, 0, 0);
		outline: none;
		width: 200px;
		font-variant-numeric: tabular-nums;
	}

	button:focus {
		border: 2px solid #ff3e00;
	}

	button:active {
		background-color: rgba(255, 62, 0, 0.2);
	}
</style>

<div>
	{#if count}
		<p>Amount: {count}</p>
		<button on:click="{buyProduct}">Buy one!</button>
	{:else}
		<p>loading.....</p>
	{/if}
</div>
