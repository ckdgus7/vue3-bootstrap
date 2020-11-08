<template>
<header>
  <h1>
    <router-link to="/">Shop</router-link>
  </h1>
  <nav>
    <ul>
      <li>
        <router-link to="/products">Products</router-link>
      </li>
      <li>
        <router-link to="/cart">Cart</router-link>
        <base-badge mode="elegant">{{ cartQuantity }}</base-badge>
      </li>
      <!-- <li v-if="isLoggedIn">
          <router-link to="/admin">Admin</router-link>
        </li> -->
    </ul>
  </nav>
  <div></div>
  <!-- <div>
    <button v-if="!isLoggedIn" @click="login">Login</button>
    <button v-if="isLoggedIn" @click="logout">Logout</button>
  </div> -->
</header>
</template>

<script>
import {
  computed
} from 'vue';
import {
  useStore
} from 'vuex';
export default {
  setup() {
    // const { getters, dispatch } = useStore();
    const {
      getters
    } = useStore();
    const cartQuantity = computed(() => getters['cart/quantity'])
    // const isLoggedIn = computed(() => getters['isAuthenticated'])
    // const login = dispatch('login')
    // const logout = dispatch('logout')

    return {
      cartQuantity,
      // isLoggedIn,
      // login,
      // logout
    }
  },
};
</script>

<style scoped>
header {
  height: 5rem;
  background-color: white;
  margin: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: center;
  align-items: center;
}

li {
  margin: 0 1rem;
}

a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.25rem;
}

a:hover,
a:active,
a.router-link-active {
  color: #45006d;
  border-color: #45006d;
}

button {
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border: 1px solid #45006d;
  background-color: transparent;
  color: #45006d;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #f0d5ff;
}
</style>
