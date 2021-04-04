<script lang="ts">
	// import Counter from '$lib/Counter.svelte';
	import BuyButton from '$lib/BuyButton.svelte'
	// import Upload from '$lib/Upload.svelte';
	// import * as market from 'market-lib';
	import { onMount } from 'svelte'
	import { writable } from 'svelte/store'
	import Message from '$lib/Message.svelte'
	import '../theme.css'

	import { Section, Container, Row, Col, Button, Image, Loading } from '../design-system/index'

	import Hero from '../lib/Hero/Hero.svelte'
	import Toolbar from '../lib/Toolbar/Toolbar.svelte'
	import Progress from '../lib/Progress/Progress.svelte'
	import AvailabilityCount from '../lib/AvailabilityCount/AvailabilityCount.svelte'

	$: amount = 0
	const MAX = 500
	const messageStore = writable('')
	let messages = []
	let socket = null
	const sendMessage = (message) => {
		console.log('sendMessage called!')
		if (socket.readyState <= 1) {
			socket.send('buy')
		}
	}

	onMount(async () => {
		// WASM Market Lib
		// await market.default()
		// market.greet("Svelte")

		console.log('onMount')
		// Websockets
		socket = new WebSocket('ws://localhost:8083')
		// Connection opened
		socket.addEventListener('open', function (event) {
			console.log("It's open", event)
		})

		// Listen for messages
		socket.addEventListener('message', function (event) {
			console.log('message', event)
			console.log('message', event.data)
			let data = JSON.parse(event.data)
			if (data) {
				if (data.message === 'Amount update!') {
					amount = data.amount
				}
				messageStore.set(data)
			}
		})

		messageStore.subscribe((currentMessage) => {
			console.log('currentMessage', currentMessage)

			messages = [...messages, currentMessage]
		})
	})
</script>

<Hero />
<Section>
	<Toolbar />
	<Container>
		<Row>
			<Col>
				<h1 class="headline">NFTCat</h1>
				<p>This is the first IOTA NFT Cat</p>
			</Col>
			<Col class="history-col">
				<AvailabilityCount {amount} max={MAX} />
				<BuyButton />
				<h4>Messages</h4>
				{#each messages as message, i}
					<Message {message} />
				{/each}
			</Col>
		</Row>
	</Container>
</Section>
