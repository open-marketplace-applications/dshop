<script>
	import { cart } from './stores.js'
	let cart_sum = 0
	const unsubscribe = cart.subscribe((items) => {
		const itemValues = Object.values(items)
		cart_sum = 0
		itemValues.forEach((item) => {
			cart_sum += item.count
		})
	})
</script>
<li class="nav-link active">
	{#if cart_sum > 0}
		{cart_sum}
	{/if}
</li>