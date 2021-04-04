<script lang="ts">
	export let value: number
	export let unit: string
</script>

<div class="price">
	<h3>{value}</h3>
	<span>{unit}</span>
</div>

<style>
	.price {
		display: flex;
		align-items: flex-end;
		margin-bottom: var(--space-md);
	}

	h3 {
		font-size: var(--space-xl);
		font-weight: bold;
		margin: 0 var(--space-xxs) 0 0;
	}

	span {
		margin-bottom: var(--space-xxxs);
	}
</style>
