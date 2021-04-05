<script lang="ts">
	import BuyButton from '$lib/BuyButton.svelte'
	import { onMount } from 'svelte'
	import { writable } from 'svelte/store'
	import Message from '$lib/Message.svelte'
	import '../theme.css'

	import { Section, Container, Row, Col } from '../design-system/index'

	import Hero from '$lib/Hero/Hero.svelte'
	import Toolbar from '$lib/ToolBar/Toolbar.svelte'
	import AvailabilityCount from '$lib/AvailabilityCount/AvailabilityCount.svelte'

	// import { io } from "socket.io-client";
	

	$: amount = 0
	const MAX = 500
	const messageStore = writable('')
	let messages = []
	let socket = null
	// const sendMessage = (message) => {
	// 	console.log('sendMessage called!')
	// 	if (socket.readyState <= 1) {
	// 		socket.send('buy')
	// 	}
	// }

	onMount(async () => {
		// WASM Market Lib
		// await market.default()
		// market.greet("Svelte")

		console.log('onMount')
		// Websockets

		// const socket = io("http://localhost:5000");
		const socket = io("https://oma-dshop.herokuapp.com/");

		console.log('socket', socket)

		socket.on('update', function(message) {
			let data = JSON.parse(message)
			console.log('update', data)
			if (data) {
				if (data.type === 'amount_update') {
					amount = data.amount
				} else if(data.type === 'connect_user') {
					console.log('set', data.message)
				} else {
					console.log('whatever type')
				}
				messageStore.set(data.message)
			}
		});

		// OLD SOCKET STUFF
		// socket = new WebSocket('wss://oma-dshop.herokuapp.com')
		// socket = new WebSocket('ws://localhost:4000')
		// // Connection opened
		// socket.addEventListener('open', function (event) {
		// 	console.log("It's open", event)
		// })

		// // Listen for messages
		// socket.addEventListener('message', function (event) {
		// 	console.log('message', event)
		// 	console.log('message', event.data)
		// 	let data = JSON.parse(event.data)
		// 	if (data) {
		// 		if (data.message === 'Amount update!') {
		// 			amount = data.amount
		// 		}
		// 		messageStore.set(data)
		// 	}
		// })

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
				<h1 class="headline">IOTA Chrysalis</h1>
				<p>IOTA Chrysalis is coming soon. This is a very first step into that direction. We are using both, IOTA 1.5 and 2.0 to already create NFTs with colored coins. Read more <a target='_blank' href='www.google.de'>here</a></p>
			</Col>
			<Col class="history-col">
				<AvailabilityCount {amount} max={MAX} />
				<BuyButton />
				<h5 style="margin-top: var(--space-xl); margin-bottom: var(--space-sm)">Messages</h5>
				{#each messages.reverse() as message, i}
					<Message
						type='user-connected' 
						author='@johnDoe'
						dateTime='04.01.2021 at 9:52am'
					/>
					<Message 
						type='purchase' 
						volume={42000}
						unit='MI'
						owner='@iotaben'
						author='@johnDoe'
						dateTime='04.01.2021 at 9:42am'
					/>
					<Message 
						type='user-disconnected' 
						author='@johnDoe'
						dateTime='04.01.2021 at 9:24am'
					/>
				{/each}
			</Col>
		</Row>
	</Container>
</Section>
