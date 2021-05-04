

<script context="module">
	export const prerender = true;
</script>
  
<script lang="ts">
  import Checkout from '../cart/Checkout.svelte'
  import { Section, Container, Row, Col } from '../design-system/index'
  import { onMount } from 'svelte'
  import { cart } from "../cart/stores.js"
  import items from '../mocks/products.js'
	let item = items[0]
  let { img, name, price } = item;

  import { variables } from '$lib/variables';

  const client_id = variables.paypal_client_id 

  console.log('client_id', client_id)
  onMount(() => {
		console.log('onMount')
		cart.update(n => {
        return { ...n, [name]: { ...item, count: 1 } };
      });
  })
  
</script>

<svelte:head>
    <script
        src={"https://www.paypal.com/sdk/js?currency=EUR&client-id=ASdqo5xgUZOW_YrjgR0XnepLOLbJBCPhJK9N5TMVx0YRj1e3mM3jICi80CDorJZNtwnrC2uUQxSmFhTK"}>
    </script>
</svelte:head>

<div class="cart">
  <Section>
    <Container size="small">
      <h1 style="margin-bottom: var(--space-lg)">Jetzt kaufen</h1>
      <Checkout />
    </Container>
  </Section>
</div>

<style lang="scss">
</style>