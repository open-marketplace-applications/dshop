<script>
	import Button from '../design-system/atoms/Button/Button.svelte'
	import Loading from '../design-system/atoms/Loading/Loading.svelte'
    import { payWithIOTA } from '../api/shop'
    export let value
	export let callback
	export let order_id

    
    let loading = false
    let iota_address = ""
    async function buy() {
		console.log('buyButton buy')
		loading = true
		let res = await payWithIOTA(order_id)
		console.log('res', res)
        iota_address = res.payment.address
		loading = false
	}
</script>

{#if !loading}
    {#if !iota_address}
		<Button  size='lg' callback={buy} block={true}>Zahl mit IOTA</Button>
        {:else}
        <p>iota_address: {iota_address}</p>
    {/if}
	{:else}
	<Button size='lg' callback={buy} block={true}>
		<Loading size="sm" color="light" />
	</Button>
{/if}
