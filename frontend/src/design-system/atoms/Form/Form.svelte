<script lang="ts">
	export let onSubmit: () => void
</script>

<div class={`form ${$$props.class}`}>
	<form on:submit|preventDefault={onSubmit}>
		<slot />
	</form>
</div>

<style lang="scss">
	.form {
		max-width: 500px;
		width: 100%;
		margin: 0 auto;
		padding: 0;
		border: none;
		border-radius: var(--radius);
	}

	:global(h1) {
		margin-bottom: var(--space-xl);
	}

	@media (min-width: 720px) {
		.form-container {
			border: var(--border);
			padding: var(--space-xxl);
			background-color: var(--color-layout-50);
		}
	}
</style>
