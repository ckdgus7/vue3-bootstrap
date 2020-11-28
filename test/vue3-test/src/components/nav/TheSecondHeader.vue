<template>
<header>
  <h1>
    <router-link to="/second">Main Router</router-link>
  </h1>
  <nav>
    <ul>
      <li>
        <router-link to="/second">Second Page</router-link>
      </li>
      <li>
        <router-link to="/second2">Second2 Page</router-link>
      </li>
    </ul>
  </nav>
  <div></div>
</header>
</template>

<script>
export default {
  name: 'SecondAppHeader',
  setup() {
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
