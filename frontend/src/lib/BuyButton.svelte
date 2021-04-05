<script lang="ts">
	import { onMount } from 'svelte'
	import { buyProduct } from '../api/shop'
	import Button from '../design-system/atoms/Button/Button.svelte'
	import Loading from '../design-system/atoms/Loading/Loading.svelte'

	let loading = true
	let address_to_pay = null

	onMount(async () => {
		console.log('buyButton onMount')
		loading = false
	})

	async function buy() {
		console.log('buyButton buy')
		loading = true
		let res = await buyProduct()
		console.log('buyButton buy res', res)
		if (res.iota_address) {
			address_to_pay = res.iota_address

			// const client = new Iota.MqttClient("ws://localhost:14265/mqtt");

			// client.milestonesLatest((topic, data) => {
			//     consoleLog(topic, data);
			// });
		}
		loading = false
	}
</script>

{#if !loading}
	{#if address_to_pay}
		<p>Send 1Mi to this address: {address_to_pay}</p>
	{:else}
		<Button size='lg' callback={buy} block={true}>Buy</Button>
	{/if}
{:else}
	<Button size='lg' callback={buy} block={true}>
		<Loading size="sm" color="light" />
	</Button>
{/if}
