<script lang='ts'>
  import Moon from './assets/Moon.svelte'
  import Sun from './assets/Sun.svelte'
  import Back from './assets/Back.svelte'
  import Share from './assets/Share.svelte'
  import Link from './assets/Link.svelte'
  import Play from './assets/Play.svelte'

  type Icon = 'sun' | 'moon' | 'link' | 'back' | 'share' | 'play'
  type Size = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

  export let icon: Icon
  export let size: Size = 'md'
</script>

<i class={`icon ${size} ${$$props.class}}`}>
  {#if icon === 'sun'}
    <Sun />
  {:else if icon === 'moon'}
    <Moon />
  {:else if icon === 'link'}
    <Link />
  {:else if icon === 'back'}
    <Back />
  {:else if icon === 'share'}
    <Share />
  {:else if icon === 'play'}
    <Play />
  {/if}
</i>

<style lang='scss'>
  :global(svg) {
    height: inherit;
    width: inherit;
  }
  :global(.icon) {
    height: var(--space-lg);
    width: var(--space-lg);
  }

  :global(.icon.sm) {
    height: var(--space-md);
    width: var(--space-md);
  }

  :global(.icon.lg) {
    height: var(--space-xl);
    width: var(--space-xl);
  }

  :global(.icon.xl) {
    height: var(--space-xxl);
    width: var(--space-xxl);
  }
  :global(.icon.xxl) {
    height: var(--space-xxxl);
    width: var(--space-xxxl);
  }
</style>