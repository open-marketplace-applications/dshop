<script lang="ts">
	type Unit = 'IOTA' | 'MI' | '$' | '€'

	export let value: number = 0
	export let unit: Unit = 'MI'
</script>

<div class={`price ${$$props.class}`}>
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
