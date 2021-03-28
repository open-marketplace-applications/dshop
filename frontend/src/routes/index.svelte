<script lang="ts">
	import Counter from '$lib/Counter.svelte';
	import Upload from '$lib/Upload.svelte';
	import * as market from 'market-lib';
	import { onMount } from 'svelte';

	console.log('market', market);
	onMount(async () => {
		console.log('market');
		await market.default()
		market.greet("Svelte")
	});
</script>

<style lang="scss">
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}

	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 4rem auto;
		max-width: 14rem;
	}

	p {
		max-width: 14rem;
		margin: 2rem auto;
		line-height: 1.35;
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}

		p {
			max-width: none;
		}
	}
</style>

<main>
	<h1>Hello world!</h1>

	<Counter />
	<!-- <Upload /> -->

	<p>
		Visit
		<a href="https://svelte.dev">svelte.dev</a>
		to learn how to build Svelte apps.
	</p>
</main>
