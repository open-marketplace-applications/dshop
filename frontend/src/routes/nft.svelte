<script context="module">
	export const prerender = true;
  </script>
  

  <script lang="ts">
	import { onMount } from 'svelte'
	import { writable } from 'svelte/store'
	
	import { Section, Container, Row, Col, Loading, Progress, Price, Label } from '$design-system/index'
	
	import Hero from '$lib/Hero/Hero.svelte'
	import Toolbar from '$lib/ToolBar/Toolbar.svelte'
	import BuyButton from '$lib/BuyButton.svelte'
	import Messages from '$lib/Messages.svelte'
	
	$: amount = 0
	$: loading = true
	const MAX = 500
	const messageStore = writable('')
	let messages = []
	let socket = {
		emit: function(x,y){
			console.log("not loadet yet.")
		}
	}

	onMount(async () => {
		console.log('onMount')

		// WASM Market Lib
		// await market.default()
		// market.greet("Svelte")
		// Websockets
		
		// socket = io("http://localhost:5000")
		// socket = io("https://oma-dshop.herokuapp.com/")

		// console.log('socket', socket)

		// socket.on('update', function(message) {
		// 	let data = JSON.parse(message)
		// 	console.log('update', data)
		// 	if (data) {
		// 		if (data.type === 'amount_update') {
		// 			amount = data.amount
		// 		} else if(data.type === 'connect_user') {
		// 			console.log('set', data.message)
		// 		} else {
		// 			console.log('whatever type')
		// 		}
		// 		messageStore.set(data)
		// 	}
		// })

		// messageStore.subscribe((currentMessage) => {
		// 	console.log('currentMessage', currentMessage)
		// 	if(currentMessage) {
		// 		messages = [...messages, currentMessage]
		// 	}
		// })

		loading = false
	})
</script>

<Hero />
<Section>
	<Toolbar />
	<Container>
		<Row>
			<Col>
				<h1 class="headline">IOTA Chrysalis</h1>
				<p>IOTA Chrysalis is coming soon. This is a very first step into that direction. We are using both, IOTA 1.5 and 2.0 to already create NFTs with colored coins. Read more </p>
			</Col>
			<Col class="history-col">
				<div class="offer">
					<Progress
						label="Availability"
						value={amount}
						max={MAX}
						size='lg'
					/>
					<div>
						<Label label="Price" />
						<Price value={1000000} unit='IOTA' />
					</div>
				</div>
				<BuyButton disabled={true} />
				{#if loading}
					<Loading />
				{:else}
					<Messages messages={messages} socket={socket} />
				{/if}
			</Col>
		</Row>
	</Container>
</Section>

<style>
	.offer {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	:global(.offer .progress) {
		margin-right: var(--space-xl);
	}
</style>

<!-- 
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
-->