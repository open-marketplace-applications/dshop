
<button on:click={toggle}>
	<Moon />
</button>


<script>
	import Moon from '../../design-system/icons/Moon.svelte'

  function toggle() {
    window.document.body.classList.toggle('dark-mode')
  }
</script>

<style>
  button {
		background-color: var(--color-element);
		outline: none;
		border-radius: var(--radius);
		border: var(--border);
		width: var(--space-xxl);
		height: var(--space-xxl);
		font-size: 1em;
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--color-text);
		cursor: pointer;
		margin-right: var(--space-md);
	}
</style>
