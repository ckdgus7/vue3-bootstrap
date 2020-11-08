<template>
<section>
  <ul>
    <product-item v-for="(prod, i) in products" :key="`${prod.id}_${i}`" :id="prod.id" :title="prod.title" :image="prod.image" :description="prod.description" :price="prod.price"></product-item>
  </ul>
</section>
</template>

<script>
import {
  computed
} from 'vue';
import ProductItem from '../components/products/ProductItem.vue';
import {
  useStore
} from 'vuex';

export default {
  components: {
    ProductItem,
  },
  setup() {
    const {
      getters
    } = useStore()
    const products = computed(() => getters['prods/products'])

    return {
      products
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>
