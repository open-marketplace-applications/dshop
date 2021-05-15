<script>
	import ProductCard from './ProductCard.svelte'
	import items from '../mocks/products.js'
</script>

<div class="container">
	<div class="row">
		{#each items as item}
			<div class="col-md-4">
				<ProductCard {item} />
			</div>
		{/each}
	</div>
</div>

<style></style>
