<script lang="ts">
	type Direction = 'column' | 'row'
	type Align = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'

	export let direction: Direction = 'column'
	export let align: Align = 'flex-start'
	export let justify: Align = 'flex-start'
</script>

<div
	style="align-items: {align}; justify-content: {justify}; flex-direction: {direction}"
	class={`col ${$$props.class}`}
>
	<slot />
</div>

<style>
	.col {
		flex: 1;
		width: 100%;
		min-width: 100%;
		display: flex;
	}

	@media (min-width: 720px) {
		.col {
			margin: 0 var(--space-md);
			width: auto;
			min-width: auto;
		}
	}
</style>
