<div 
	style="align-items: {align}; justify-content: {justify}; flex-direction: {direction}"
	class={`col ${$$props.class}`}
>
	<slot/>
</div>

<script lang='ts'>
	export let align: string = 'flex-start'
	export let direction: string = 'column'
	export let justify: string = 'flex-start'
</script>

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
