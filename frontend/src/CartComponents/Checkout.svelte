<script>
	import CheckoutItem from './CheckoutItem.svelte'
	import AdressForm from './AdressForm.svelte'
	import { cart } from './stores.js'
	import { checkout } from '../api/shop'

	let checkedOut = false
	let cartItems = []
	const unsubscribe = cart.subscribe((items) => {
		cartItems = Object.values(items)
	})
	const send_checkout = async () => {
		console.log('send_checkout')
		let res = await checkout(cart)
		console.log('Checkout buy res', res)

		checkedOut = true
		cart.update((n) => {
			return {}
		})
	}
</script>

<div class="container">
	<h1>My Cart</h1>
	<div class="row">
		<div class="col-sm">
			{#if cartItems.length === 0}
				{#if checkedOut}
					<p class="empty-message">Thank you for shopping with us</p>
				{:else}
					<p class="empty-message">Your cart is empty</p>
				{/if}
			{:else}
				<div class="row">
					{#each cartItems as item (item.name)}
						<CheckoutItem {item} />
					{/each}
				</div>
				<div class="row">
					<AdressForm />
				</div>
				<br />
				<div class="btn btn-success btn-lg btn-block" on:click={send_checkout}>Checkout</div>
			{/if}
		</div>
	</div>
</div>
