<div class={`section ${dark ? 'dark' : ''} ${$$props.class}`}>
	<slot/>
</div>

<script lang='ts'>
  export let dark: boolean
</script>

<style>
  .section {
    position: relative;
    padding: 40px 0;
  }
  .section.dark {
    background-color: var(--color-element);
  }

  @media (min-width: 720px) {
    .section {
      padding: 80px 0;
    }
	}
</style>