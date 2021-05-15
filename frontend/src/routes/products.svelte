<script>
	import CardWrapper from '$lib/ProductCards.svelte'
	import Navbar from '$cart/Navbar.svelte'
	import Checkout from '$cart/Checkout.svelte'
	import { Section, Container, Row, Col } from '$design-system/index'
	import { cart } from '$cart/stores.js'
</script>

<Section>
	<Container>
		<Row>
			<Col>
				<h1>Home</h1>
				<CardWrapper />
			</Col>
		</Row>
	</Container>
</Section>
