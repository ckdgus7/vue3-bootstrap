<template>
  <section>
    <hTagBadge h-tag="h2" key-text="Your Cart" :is-badge="false" />
    <hTagBadge
      h-tag="h3"
      key-text="Total Amount: "
      :is-badge="false"
      :value-text="`${cartTotal} 원`"
    />
    <ul>
      <cart-item
        v-for="item in cartItems"
        :key="item.productId"
        :prod-id="item.productId"
        :title="item.title"
        :image="item.image"
        :price="item.price"
        :qty="item.qty"
      ></cart-item>
    </ul>
  </section>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import CartItem from '../components/cart/CartItem.vue';
import hTagBadge from '../components/cart/hTagBadge.vue';

import { AddComma } from '../utils.js';

export default {
  components: {
    CartItem,
    hTagBadge,
  },
  setup() {
    const { getters } = useStore();
    const cartTotal = computed(() => AddComma(getters['cart/totalSum']));
    const cartItems = computed(() => getters['cart/products']);
    return {
      cartTotal,
      cartItems,
    };
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
}

h2 {
  color: #292929;
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
}

h3 {
  text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
