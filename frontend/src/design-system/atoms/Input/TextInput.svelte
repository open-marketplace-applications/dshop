<script lang="ts">
	export let name: string
	export let label: string
	export let value: string = ''
	export let placeholder: string = 'Add a placeholder'
</script>

<div class={`input ${$$props.class}`}>
	{#if label}
		<label for={name}>{label}</label>
	{/if}

	<input 
		type="text"
		{name}
		{placeholder} 
		bind:value
		tabindex="0"
	/>
	<slot />
</div>

<style>
	.input {
		display: flex;
		width: 100%;
		flex-direction: column;
		position: relative;
		margin-bottom: var(--space-lg);
	}

	label {
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: var(--space-xxs);
		opacity: 0.5;
		transition: var(--transition);
	}

	input {
		padding: var(--space-md);
		background-color: var(--color-element-light);
		border-radius: var(--radius);
		border-width: 1px;
		border-color: transparent;
		border: var(--border);
		outline: none;
		color: var(--color-text);
		transition: var(--transition);
	}

	input:hover {
		background-color: var(--color-element);
	}
	input::placeholder {
		color: var(--text-color);
		opacity: 0.5;
	}

	.input:hover label {
		opacity: 1;
	}

	.input:focus-within input {
		background-color: var(--color-element);
		border: var(--border);
	}

	.input:focus-within label {
		opacity: 1;
	}
</style>
