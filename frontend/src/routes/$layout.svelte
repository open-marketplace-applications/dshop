<script>
	import Nav from '$lib/Nav/Nav.svelte'
	import Footer from '$lib/Footer.svelte';

	import WebSockets from '$lib/WebSockets.svelte'
	import '../theme.css'
	import { cart } from '../cart/stores'
	let cardCount;
	const unsubscribe = cart.subscribe((items) => {
		const itemValues = Object.values(items)
		cardCount = 0
		itemValues.forEach((item) => {
			cardCount += item.count
			console.log("Hello", item.count)
		})
	})
</script>

<Nav cardCount={cardCount} />
<main>
	<slot />
</main>
<Footer />
<WebSockets />