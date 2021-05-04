<script>
	import { Section, Container, Row, Col, Button, Price, Progress } from '../design-system/index'
	import CheckoutItem from './CheckoutItem.svelte'
	import AdressForm from './AdressForm.svelte'
	import { cart } from './stores.js'
	import { checkout } from '../api/shop'
	
	const MODE = variables.mode
	let values = {}

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

	let checkedOut = false
	let cartItems = []
	const unsubscribe = cart.subscribe((items) => {
		cartItems = Object.values(items)
	})

	import { regSchema } from './schema'
    let price = 9.00
	
	import { variables } from '$lib/variables';
	

	$: shipping_cost = values.country === "Germany" ? 1.55 : 3.70

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
	<AdressForm bind:values={values} />
	<hr>
	<p>Magazin ({cartItems[0].count} Stück): {price * cartItems[0].count}€ </p>
	<p>Shipping: {shipping_cost}€</p>
	<p>Total: {(price * cartItems[0].count) + shipping_cost}€</p>
	<hr>
	<Button label="Checkout" size="lg" callback={send_checkout} block />
{/if}
