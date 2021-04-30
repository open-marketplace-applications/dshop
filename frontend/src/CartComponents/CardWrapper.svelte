<script>
	import Card from './Card.svelte'
	import items from '../mocks/products.js'
</script>

<div class="container">
	<div class="row">
		{#each items as item}
			<div class="col-md-4">
				<Card {item} />
			</div>
		{/each}
	</div>
</div>
