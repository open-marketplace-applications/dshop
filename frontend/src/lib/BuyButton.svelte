<script lang="ts">
	import { onMount } from 'svelte';
	import { buyProduct } from '../api/shop';


	let loading = true;
	let address_to_pay = null;

	onMount(async () => {
		console.log('buyButton onMount');
		loading = false;
	});

	async function buy() {
		console.log('buyButton buy');
		loading = true;
		let res = await buyProduct();
		console.log('buyButton buy res', res);
		if (res.iota_address) {
			address_to_pay = res.iota_address;

			// const client = new Iota.MqttClient("ws://localhost:14265/mqtt");

			// client.milestonesLatest((topic, data) => {
			//     consoleLog(topic, data);
			// });
		}
		loading = false;
	}
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
	{#if !loading}
		{#if address_to_pay}
			<p>Send 1Mi to this address: {address_to_pay}</p>
		{:else}
			<button on:click={buy}>Buy one!</button>
		{/if}
	{:else}
		<p>loading.....</p>
	{/if}
</div>
