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
		font-size: var(--space-md);
    font-weight: bold;
		margin-bottom: var(--space-xxs);
	}
</style>
