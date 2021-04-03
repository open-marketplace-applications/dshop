<div class={`container ${$$props.class}`}>
	<slot />
</div>

<style>
  .container {
		max-width: var(--content-width);
    width: 100%;
    margin: 0 auto;
    padding: 0 var(--space-lg);
	}
  
  @media (min-width: 720px) {
    .container {
      padding: 0 var(--space-xxl);
    }
	}
</style>
