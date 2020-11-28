<template>
  <section>
    <ul>
      <product-item
        v-for="(prod, i) in products"
        :key="`${prod.id}_${i}`"
        :id="prod.id"
        :title="prod.title"
        :image="prod.image"
        :description="prod.description"
        :price="prod.price"
      ></product-item>
    </ul>
  </section>
</template>

<script>
import { computed, provide, reactive, watch } from 'vue';
import ProductItem from '../components/products/ProductItem.vue';
import { useStore } from 'vuex';

export default {
  components: {
    ProductItem,
  },
  setup() {
    const { getters } = useStore();
    const products = computed(() => getters['prods/products']);
    const pvdState = reactive({
      pvd1: 'one provide',
      pvd2: 'two provide',
    });
    watch(pvdState, (pvd) => {
      console.log(pvd);
    });

    const pvdEvent = (num) => {
      pvdState.pvd1 = 'change pvd' + num;
    };
    provide('pvdState', pvdState);
    provide('pvdEvent', pvdEvent);

    return {
      products,
    };
  },
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
