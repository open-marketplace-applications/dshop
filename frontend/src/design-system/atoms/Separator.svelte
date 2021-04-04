<script lang="ts">
	export let title: string
</script>

<span>
	{title}
</span>

<style>
	span {
		text-transform: uppercase;
		font-size: var(--space-sm);
		letter-spacing: 0.1em;
		font-weight: bold;
		margin-bottom: var(--space-xxs);
		opacity: 0.5;
	}
</style>
