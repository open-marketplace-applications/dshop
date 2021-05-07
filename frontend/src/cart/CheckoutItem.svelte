<script>
	import { Button } from '../design-system/index'
  import { cart } from "./stores.js";
  export let item;
  let { name, price, img, count } = item;
  const countButtonHandler = (e) => {
    if (e.target.classList.contains("add")) {
      count++;
    } else if (count >= 1) {
      count--;
    }
    cart.update((n) => ({ ...n, [name]: { ...n[name], count } }));
  };
  const removeItem = () => {
    cart.update((n) => {
      delete n[name];
      return n;
    });
  };
</script>

<div class="cart-item">
  <img
    class="image"
    width="300"
    src={`${img}`}
    alt={name}
  />
  <div class="content">
    <h2 class="title">{name}</h2>
    <div class="price-container">
      <h3>Price: </h3>
      <h3>{price} €</h3>
    </div>
    <div class="counter">
      <Button
        label="-"
        size="sm"
        callback={countButtonHandler}
      />
      {" "}
      <span class="count">{count}</span>
      {" "}
      <Button
        class="add"
        label="+"
        size="sm"
        callback={countButtonHandler}
      />
      {" "}
    </div>
    <!-- <Button
      label="Remove"
      callback={removeItem}
    /> -->
  </div>
</div>

<style lang="scss">
  
  .cart-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    @media (min-width: 720px) {
      flex-direction: row;
    }

    .image {
      --dimension: calc(100vw - ( 2 * var(--space-lg) ));
      border-radius: var(--radius);
      width: var(--dimension);
      height: var(--dimension);
      margin-bottom: var(--space-xl);
      @media (min-width: 720px) {
        margin-bottom: 0;
        height: 200px;
        width: 200px;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-grow: 1;

      @media (min-width: 720px) {
        margin-left: 40px;
      }

      .price-container {
        display: flex;
        margin: var(--space-md) 0 var(--space-md);
        
        h3:first-child {
          font-weight: 300;
          margin-right: var(--space-xs);
        }
      }
      
      .counter {
        display: flex;
        align-items: center;
        
        .count {
          font-weight: 700;
          margin: 0 var(--space-sm);
        }
      }
    }
  }

  

</style>