<script lang="ts">
	export let name: string = 'Add a name'
	export let label: string
	export let checked: boolean = false
	export let onChange: () => void
</script>

<div class={`checkbox ${$$props.class}`}>
	<input
		{name}
		type="checkbox"
		tabindex="0"
		{checked}
		on:change={onChange}
	/>
	<label for={name}>
		{#if label} {label} {:else} <slot /> {/if}
	</label>
</div>

<style>
	.checkbox {
		display: flex;
		flex-direction: column;
		position: relative;
		margin-bottom: var(--space-lg);
		flex-direction: row;
		align-items: center;
	}

	label {
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: var(--space-xxs);
		opacity: 0.5;
		transition: var(--transition);
	}

	.checkbox :global(input) {
		margin: 0;
		margin-right: var(--space-sm);
		height: var(--space-md);
		width: var(--space-md);
	}

	.checkbox :global(label) {
		margin-bottom: 0;
		opacity: 0.5;
		transition: all 0.1s ease-in-out;
	}

	.checkbox:hover label {
		opacity: 1;
	}

	.checkbox:focus-within label {
		opacity: 1;
	}
</style>
