<script lang="ts">
	type buttonType = 'button' | 'submit'
	type buttonSize = 'sm' | 'md' | 'lg'
	type buttonColor = 'primary' | 'secondary'

	export let callback: () => void
	export let label: string
	export let color: buttonColor = 'primary'
	export let link: string
	export let size: buttonSize = 'md'
	export let block: boolean = false
	export let rounded: boolean = false
	export let type: buttonType = 'button'
	export let disabled: boolean = false
</script>

{#if link}
	<a
		href={link}
		class={`btn 
			${rounded ? 'rounded' : ''}
			${size}
			${color}
			${block ? 'block' : ''}
			${$$props.class}
		`}
	>
		{label ? label : ''}
		<slot />
	</a>
{:else}
	<button
		on:click={callback}
		{type}
		{disabled}
		class={`btn
			${rounded ? 'rounded' : ''} 
			${size} 
			${color} 
			${block ? 'block' : ''} 
			${$$props.class}
			`}
	>
		{label ? label : ''}
		<slot />
	</button>
{/if}

<style lang="scss">
	.btn {
		background: var(--color-primary);
		outline: none;
		border-radius: var(--radius);
		border: var(--border);
		padding: var(--space-sm) var(--space-xl);
		font-size: 14px;
		color: var(--color-white);
		display: block;
		font-weight: bold;
		cursor: pointer;
		opacity: 1;
		margin: 0;
		line-height: 1;
		text-decoration: none;
		white-space: nowrap;
		transition: var(--transition);
	}

	.btn.block {
		width: 100%;
		text-align: center;
	}

	.btn.rounded {
		border-radius: 100px;
	}

	.btn:hover,
	.btn:focus {
		background: var(--color-primary-light);
	}

	/* Size */
	.btn.sm {
		padding: var(--space-xs) var(--space-md);
	}
	.btn.md {
		padding: var(--space-sm) var(--space-xl);
	}
	.btn.lg {
		padding: var(--space-md) var(--space-xxl);
		font-size: var(--space-md);
	}

	/* Color */
	.btn.primary {
		background: var(--color-primary);
	}
	.btn.primary:hover {
		background: var(--color-primary-light);
	}

	/* Color */
	.btn.secondary {
		background: var(--color-element-light);
		color: var(--color-text);
	}
	.btn.secondary:hover {
		background: var(--color-element);
	}

	.btn:disabled {
		opacity: 0.5;
		background: var(--color-element);
		color: var(--color-text);
		cursor: not-allowed;

		&:hover {
			background-color: var(--color-element);
			opacity: 1;
		}
	}
</style>
