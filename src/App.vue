<template>
  <div id="app">

    <!-- Navbar Starts Here -->
    <b-navbar
      class="nav fixed-top px-5 d-flex justify-content-between"
      toggleable="lg"
      type="dark"
    >
      <b-navbar-brand href="#">My Vue Shoes</b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ms-3">
          <b-nav-item href="#" active>Products</b-nav-item>
          <b-nav-item href="#" disabled>About Us</b-nav-item>
          <b-nav-item href="#" disabled>Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <b-navbar-nav
        @click="cartToggle"
        class="cart-icon d-flex flex-row align-items-center justify-content-center ml-auto h2"
      >
        <b-icon variant="light" icon="cart4"> </b-icon>
        <div
          class="d-flex align-items-center align-self-start justify-content-center"
        >
          {{ cartData.length === 0 ? "0" : showTotalItemNumber }}
        </div>
      </b-navbar-nav>
    </b-navbar>
    <!-- Navbar Ends Here -->

    <!-- Main Starts Here -->
    <main>
      <b-row class="d-flex justify-content-center gap-4">
        <Card
          @onAddItem="addItemToCart"
          v-for="item in shoesInfo"
          :shoesData="item"
          :key="item.id"
        />
      </b-row>
    </main>
    <!-- Main Ends Here -->

    <Cart
      @deleteItem="deleteItem"
      @increase="increase"
      @decrease="decrease"
      class="cart-component"
      v-show="isCartOpen"
      :data="cartData"
    />

    <transition name="fade">
      <Alert
        :num="addedItemNumber"
        v-show="willAlertFire"
        class="alert-component"
      />
    </transition>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import Cart from "./components/Cart.vue";
import Alert from "./components/Alert.vue";
import data from "./data";

export default {
  name: "App",
  data() {
    return {
      isCartOpen: false,
      shoesInfo: data,
      cartData: [],
      addedItemNumber: null,
      willAlertFire: false,
    };
  },
  components: {
    Card,
    Cart,
    Alert,
  },
  methods: {
    // Prevent if there is no item in Cart and let it show if there are items
    cartToggle() {
      if (this.cartData.length === 0) {
        this.isCartOpen = false;
      } else {
        this.isCartOpen = !this.isCartOpen;
      }
    },
    // Checking the id, size and color of the items in Cart and if item doesnt exist it is added, if exists it's number increase
    addItemToCart(value) {
      this.addedItemNumber = value.number;
      if (
        this.cartData.some(
          (item) => item.id === value.id && item.size === value.size && item.color === value.color
        )
      ) {
        let sameItem = this.cartData.filter(
          (item) => item.id === value.id && item.size === value.size && item.color === value.color
        )[0];
        sameItem.number += value.number;
      } else {
        this.cartData.push(value);
      }
      this.willAlertFire = true;
      setTimeout(() => (this.willAlertFire = false), 2000);
    },
    // Deletes the item 
    deleteItem(val) {
      let index = this.cartData.findIndex(
        (item) => item.id === val.id && item.size === val.size && item.color === val.color
      );
      this.cartData.splice(index, 1);
      if (this.cartData.length === 0) {
        this.isCartOpen = false;
      }
    },
    increase(val) {
      let index = this.cartData.findIndex(
        (item) => item.id === val.id && item.size === val.size && item.color === val.color
      );
      this.cartData[index].number++;
    },
    decrease(val) {
      let index = this.cartData.findIndex(
        (item) => item.id === val.id && item.size === val.size && item.color === val.color
      );
      if(this.cartData[index].number !== 1) {
        this.cartData[index].number--;
      } else {
        this.cartData.splice(index, 1);
      }
      if (this.cartData.length === 0) {
        this.isCartOpen = false;
      }
    },
  },
  computed: {
    // Computes the price based on the shoe size
    showTotalItemNumber() {
      return this.cartData.reduce((acc, curr) => {
        return acc + curr.number;
      }, 0);
    },
  },
};
</script>

<style>

.nav {
  background-color: rgb(60, 49, 78);
  min-height: 10vh;
}

.cart-icon {
  min-width: 80px;
  height: 50px;
  cursor: pointer;
}

.cart-icon > div {
  min-width: 25px;
  height: 25px;
  background-color: rgb(47, 10, 82);
  color: white;
  font-size: 14px;
  border-radius: 50%;
}

main {
  padding: 120px 50px;
  background-color: rgb(209, 209, 209);
}

.cart-component {
  position: fixed;
  top: 10vh;
  right: 50px;
  width: 400px;
}

.alert-component {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 500px) {
  .cart-component {
    right: 0;
    width: 90%;
  }
}

@media only screen and (max-width: 430px) {
  .cart-component {
    right: 0px;
    width: 100vw;
  }
}
</style>
