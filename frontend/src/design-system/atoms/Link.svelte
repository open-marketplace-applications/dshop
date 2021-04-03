<a href={link} class={`link ${$$props.class}`}>
  <slot/>
  {text}
</a>

<script lang='ts'>
  export let link: string
  export let text: string
</script>

<style>
  a.link {
    opacity: .25;
    transition: var(--transition);
    display: block;
    text-align: center;
    margin-bottom: var(--space-sm);
    font-size: var(--space-sm);
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-text)
  }

  a.link:hover {
    opacity: 1;
  }
</style>