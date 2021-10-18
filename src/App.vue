<template>
  <div id="app">
    <b-navbar class="px-5" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">My Vue Shoes</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ms-3">
          <b-nav-item href="#" active>Products</b-nav-item>
          <b-nav-item href="#">Prices</b-nav-item>
          <b-nav-item href="#">About Us</b-nav-item>
          <b-nav-item href="#">Contact</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ms-auto"> </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <main class="p-5">
      <b-row class="mx-auto d-flex justify-content-center gap-5">
        <Card
          v-for="item in shoesInfo"
          :data="item"
          :key="item.id"
        />
      </b-row>
    </main>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import blue from "./assets/nike-blue.jpg";
import pink from "./assets/nike-pink.jpg";

export default {
  name: "App",
  data() {
    return {
      shoesInfo: [
        {
          id: 1,
          photo: blue,
          category: "Men Sports Shoe",
          title: "Nike Epic React Flyknit Sky Blue",
          summary: "Best for running and having fun in the nature",
          sizes: [36, 37, 38, 39, 40, 41, 42],
          price: 100,
          star: 4,
        },
        {
          id: 2,
          photo: pink,
          category: "Women Sports Shoe",
          title: "Nike Epic React Flyknit Sky Pink",
          summary: "Best for running and having fun in the nature",
          sizes: [36, 37, 38, 39, 40, 41, 42],
          price: 100,
          star: 3,
        },
        {
          id: 3,
          photo: blue,
          category: "Men Sports Shoe",
          title: "Nike Epic React Flyknit Sky Blue",
          summary: "Best for running and having fun in the nature",
          sizes: [36, 37, 38, 39, 40, 41, 42],
          price: 100,
          star: 2,
        },
        {
          id: 4,
          photo: pink,
          category: "Women Sports Shoe",
          title: "Nike Epic React Flyknit Sky Pink",
          summary: "Best for running and having fun in the nature",
          sizes: [36, 37, 38, 39, 40, 41, 42],
          price: 100,
          star: 5,
        },
      ],
    };
  },

  components: {
    Card,
  },
};
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
