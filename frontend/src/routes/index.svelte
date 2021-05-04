<script lang="ts">

	import { Section, Container, Row, Col, Button, Price, Progress } from '../design-system/index'

	import Hero from '$lib/Hero/Hero.svelte'
	import Checkout from '../cart/Checkout.svelte'
	
	import items from '../mocks/products.js'
	let item = items[0]

	const MAX = 1000
</script>

<Hero image={item.img} />
<Section>
	<Container>
		<Row>
			<Col>
				<h1>{item.name}</h1>
				<p>{item.description}</p>
			</Col>
			<Col>
				<Progress
					label="Verfügbar"
					value={item.quantity}
					max={MAX}
					size='lg'
				/>
				<div class="price-container">
					<h2>Preis:</h2>
					<h2>9,00 €</h2>
				</div>
				<Button label="Kaufen" size="lg" link="/cart" block />
			</Col>
		</Row>
	</Container>
</Section>

<style lang="scss">
	:global(.row .col:last-child) {
		max-width: 360px;
	}
	.price-container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: var(--space-md) 0 var(--space-xl);
		h2 {
			margin: 0 var(--space-sm);
		}
		h2:first-child {
			font-weight: 200;
		}
	}
	p {
		font-size: 20px;
	}
</style>