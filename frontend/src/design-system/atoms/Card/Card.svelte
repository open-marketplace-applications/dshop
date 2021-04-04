<script lang="ts">
  export let padding: boolean = true
</script>

<div class={`card ${padding ? 'padding' : ''} ${$$props.class}`} >
  <slot></slot>
</div>

<style lang="scss">
  .card {
    border-radius: var(--radius);
    background-color: var(--color-element);

    &.padding {
      padding: var(--space-md);
    }
  }
</style>