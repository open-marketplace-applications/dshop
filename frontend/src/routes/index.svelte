<script lang="ts">
	import Counter from '$lib/Counter.svelte';
	import BuyButton from '$lib/BuyButton.svelte';
	import Upload from '$lib/Upload.svelte';
	import * as market from 'market-lib';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import Message from '$lib/Message.svelte';
	import '../theme.css';

	import { Section, Container, Countdown, Row, Col, Button, Image } from '../design-system/index';

	let amount = 0;
	const messageStore = writable('');
	let messages = [];
	let socket = null;
	const sendMessage = message => {
		console.log('sendMessage called!');
		if (socket.readyState <= 1) {

			socket.send("buy");
		}
	};

	onMount(async () => {
		// WASM Market Lib
		await market.default();
		// market.greet("Svelte")

		console.log('onMount');
		// Websockets
		socket = new WebSocket('ws://localhost:8080');
		// Connection opened
		socket.addEventListener('open', function(event) {
			console.log("It's open", event);
		});

		// Listen for messages
		socket.addEventListener('message', function(event) {
			console.log('message', event);
			console.log('message', event.data);
			let data = JSON.parse(event.data);
			if (data) {
				if (data.message === 'Amount update!') {
					amount = data.amount;
				}
				messageStore.set(data);
			}
		});

		messageStore.subscribe(currentMessage => {
			console.log('currentMessage', currentMessage);

			messages = [...messages, currentMessage];
		});
	});
</script>

<style>
	.hero {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.artwork {
		width: 100%;
		margin: 0 var(--space-lg);
	}

	.toolbar {
		position: absolute;
		top: -40px;
		left: 0;
		width: 100%;
		height: 80px;
	}

	.toolbar :global(.btn.back) {
		display: none;
	}
	@media (min-width: 720px) {
		.toolbar :global(.btn.back) {
			display: block;
		}
	}

	:global(.toolbar-container) {
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	:global(.history-col) {
		flex: 0.5 !important;
	}
</style>

<!-- <main>
	<h1>Hello world!</h1>

	<Counter />
	<BuyButton />
	<Upload />
	<button on:click={sendMessage}>Send hello!</button>

	{#each messages as message, i}
		<Message {message} />
	{/each}
</main> -->

<Section dark>
	<div class="hero">
		<div class="artwork">
			<Image
				imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F83%2FNeugierige-Katze.JPG%2F1280px-Neugierige-Katze.JPG&f=1&nofb=1" />
		</div>
	</div>
</Section>
<Section>
	<div class="toolbar">
		<Container class="toolbar-container">
			<Countdown countdown="" />
			<Button color="secondary" rounded>Share</Button>
		</Container>
	</div>
	<Container>
		<Row>
			<Col>
				<h1 class="headline">"NFTCat"</h1>
				<p>This is the first IOTA NFT Cat</p>
			</Col>
			<Col class="history-col">
				<p>Amount: {amount}</p>
				<BuyButton />
				<!-- <button on:click={sendMessage}>Buy now!</button> -->
				<!-- <Button class='m-b-lg' block onClick={sendMessage}>Buy now</Button> -->
				<h5>Messages</h5>
				{#each messages as message, i}
					<Message {message} />
				{/each}
			</Col>
		</Row>
	</Container>
</Section>
