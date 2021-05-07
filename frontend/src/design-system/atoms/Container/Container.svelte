<script lang="ts">
	export let size: string
</script>

<div class={`container ${size} ${$$props.class}`}>
	<slot />
</div>

<style lang="scss">
	.container {
		max-width: var(--content-width);
		width: 100%;
		margin: 0 auto;
		padding: 0 var(--space-lg);
		
		&.small {
			width: 100%;
		}
	}

	

	@media (min-width: 720px) {
		.container {
			padding: 0 var(--space-xxl);
			&.small {
				width: 700px;
			}
		}
	}
</style>