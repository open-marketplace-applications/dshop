<script lang="ts">
	import CardWrapper from '../CartComponents/CardWrapper.svelte'
	import Navbar from '../CartComponents/Navbar.svelte'
	import Checkout from '../CartComponents/Checkout.svelte'
	import { Section, Container, Row, Col } from '../design-system/index'

	let nav = 'home'
	function navHandler(event) {
		nav = event.detail.option
	}
	console.log("Hello world!")
</script>

<Section>
	<Container>
		<Row>
			<Col>
				<Navbar on:nav={navHandler} />
				{#if nav === 'home'}
					<CardWrapper />
				{:else}
					<Checkout />
				{/if}
			</Col>
		</Row>
	</Container>
</Section>
