<div class={`row ${$$props.class}`}>
	<slot />
</div>

<style>
	.row {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 100%;
	}
	@media (min-width: 720px) {
		.row {
			--negative-margin: calc(var(--space-md) * -1);
			flex-wrap: nowrap;
			margin-left: var(--negative-margin);
			margin-right: var(--negative-margin);
		}
	}
</style>
