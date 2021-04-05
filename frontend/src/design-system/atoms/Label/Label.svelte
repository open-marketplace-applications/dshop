<script lang="ts">
  export let label: string = '🏷 Add a label'
</script>

<span class={`label ${$$props.class}`} >
  {#if label}
    {label}
  {:else}
    <slot></slot>
  {/if}
</span>

<style>
  .label {
		font-size: 12px;
    font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: var(--space-xxs);
		transition: var(--transition);
	}
</style>
