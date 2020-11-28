<template>
  <li class="product">
    <div class="product__data">
      <div class="product__image">
        <img v-if="image" :src="image" :alt="title" />
      </div>
      <div class="product__text">
        <h3>{{ title }}</h3>
        <BaseBadge mode="highlight" :no-margin-left="true">
          <h4>{{ formatPrice }} 원</h4>
        </BaseBadge>
        <p>{{ description }}</p>
        <p>{{ pvdState }}</p>
      </div>
    </div>
    <div class="product__actions">
      <button @click="addToCart">Add to Cart</button>
    </div>
  </li>
</template>

<script>
import { inject, ref } from 'vue';
import { AddComma } from '../../utils.js';
import { useStore } from 'vuex';
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const pvdState = inject('pvdState');
    const pvdEvent = inject('pvdEvent');
    const { dispatch } = useStore();
    const formatPrice = ref(props.price);
    let i = 0;
    const addToCart = () => {
      dispatch('cart/addToCart', {
        id: props.id,
      });
      pvdEvent(i);
      i++;
    };

    return {
      formatPrice: AddComma(formatPrice.value),
      addToCart,
      pvdState,
      pvdEvent,
    };
  },
};
</script>

<style scoped>
li {
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

.product__data {
  display: flex;
}

.product__image {
  margin-right: 1rem;
}

.product__image img {
  height: 10rem;
  width: 10rem;
  object-fit: cover;
}

.product__text h3 {
  margin: 0 0 0.5rem 0;
}

.product__text h4 {
  margin: 0;
}

.product__actions {
  text-align: center;
}

button {
  font: inherit;
  cursor: pointer;
  background-color: #45006d;
  color: white;
  border: 1px solid #45006d;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #760ab4;
  border-color: #760ab4;
}
</style>
