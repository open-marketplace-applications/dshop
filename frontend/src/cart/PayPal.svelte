<script>
	import { onMount } from 'svelte'
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let value
	export let callback

	const success = (message) => dispatch('success', message);

	onMount(() => {
		payPalLoaded()
	})

	let payPalLoaded = () => {
		const payPalButtons = paypal.Buttons()
		paypal
			.Buttons({
				style: {
					layout: 'vertical'
				},
				createOrder: function (data, actions) {
					return actions.order.create({
						description: `test description`,
						purchase_units: [
							{
								description: `purchase_units test description`,
								amount: {
									currency_code: 'EUR',
									value: value
								}
							}
						]
					})
				},
				onApprove: function (data, actions) {
					// This function captures the funds from the transaction.
					return actions.order.capture().then(function (details) {
						// This function shows a transaction success message to your buyer.
						console.log('details of transcation: ', details)
						success('Transaction completed by ' + details.payer.name.given_name)
					})
				}
			})
			.render('#paypal-button-container')
	}
</script>

<div>
	<div class="py-4">
		<div id="paypal-button-container" />
	</div>
</div>
