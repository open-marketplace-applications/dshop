<script>
	import { Section, Container, Row, Col, Button, Price, Progress } from '../design-system/index'
	import CheckoutItem from './CheckoutItem.svelte'
	import AdressForm from './AdressForm.svelte'
	import { cart } from './stores.js'
	import { checkout } from '../api/shop'
	
	let checkedOut = false
	let cartItems = []
	const unsubscribe = cart.subscribe((items) => {
		cartItems = Object.values(items)
	})

	import { regSchema } from './schema'
    let values = {}

	import { variables } from '$lib/variables';

	const MODE = variables.mode

	if(MODE == "DEV") {
		values = { 
			first_name: "Peter",
			last_name: "Pan",
			email: "peter@mail.de",
			address: "PeetStreet 42",
			zip_code: "1337",
			city: "PeetTown",
			country: "Germany"
		}
	}

	const send_checkout = async () => {
		console.log('send_checkout cartItems', cartItems)
		console.log('send_checkout values', values)
		let obj = {
			...values,
			amount: cartItems[0].count
		}
		let res = await checkout(obj)
		console.log('Checkout buy res', res)

		checkedOut = true
		cart.update((n) => {
			return {}
		})
	}
</script>

{#if cartItems.length === 0}
	{#if checkedOut}
		<p class="empty-message">Thank you for shopping with us</p>
	{:else}
		<p class="empty-message">Your cart is empty</p>
	{/if}
{:else}
	{#each cartItems as item (item.name)}
		<CheckoutItem {item} />
	{/each}
	<hr>
	<AdressForm values={values} />
	<hr>
	<Button label="Checkout" size="lg" callback={send_checkout} block />
{/if}
