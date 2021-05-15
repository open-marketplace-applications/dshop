<script>
	import { Section, Container, Row, Col, Button, Price, Progress } from '../design-system/index'
	import CheckoutItem from './CheckoutItem.svelte'
	import AdressForm from './AdressForm.svelte'
	import PayPal from './PayPal.svelte'
	import IOTAPay from './IOTAPay.svelte'
	import Annotations from './Annotations.svelte'
	import { cart } from './stores'
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

	let checkedOutResponse = null
	let checkedOut = false
	let payment_success = false
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
		checkedOutResponse = await checkout(obj)
		console.log('Checkout buy res', checkedOutResponse)

		checkedOut = true
		cart.update((n) => {
			return {}
		})
	}

	function handlePayPalSuccess(message) {
		payment_success = true
	}
	function handleIOTASuccess(message) {
		alert("great success!")
		payment_success = true
	}
</script>

{#if cartItems.length === 0}
	{#if checkedOut}
		{#if !payment_success}
		<h3>Bezahlen</h3>
		<p>Mit was möchstest du bezahlen?</p>
		<p>Total: {checkedOutResponse.final_price}€</p>
		<PayPal value={checkedOutResponse.final_price} order_id={checkedOutResponse._id} on:success={handlePayPalSuccess} />
		<IOTAPay value={checkedOutResponse.final_price} order_id={checkedOutResponse._id} on:success={handleIOTASuccess} />
		{:else}
			<p class="empty-message">Danke für deinen Kauf!</p>
		{/if}

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
	<p>Total: { (price * cartItems[0].count) + shipping_cost}€</p>
	<hr>
	<Button label="Checkout" size="lg" callback={send_checkout} block />
	<br>
	<br>
	<hr>


	<Annotations />
{/if}
