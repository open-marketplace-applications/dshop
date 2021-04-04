<script lang="ts">
	type Target = 'self' | 'blank' | 'parent'
	
	export let link: string
	export let text: string
	export let target: Target = 'parent'
	export let block: boolean = true
</script>

<a 
	href={link}
	target={`_${target}`}
	class={`link ${block ? 'block' : ''} ${$$props.class}`}
>
	<slot />
	{text}
</a>

<style>
	.link {
		opacity: 0.25;
		transition: var(--transition);
		display: inline-block;
		text-align: center;
		margin-bottom: var(--space-sm);
		font-size: var(--space-sm);
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--color-text);
	}

	.link.block {
		display: block;
	}

	.link:hover {
		opacity: 1;
	}
</style>
