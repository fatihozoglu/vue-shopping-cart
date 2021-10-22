<template>
  <div class="cart-component">
    <h4 class="ms-1">Cart</h4>
    <CartItem @deleteItem="deleteItem" @increase="increase" @decrease="decrease" v-for="(item, index) of data" :key="index" :data="item" />
    <div class="total-price mt-1">
      Total Price: $ {{ calculateTotal }}
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue"

export default {
  name: "Cart",
  props: {
      data: Array,
  },
  components: {
    CartItem,
  },
  methods: {
    deleteItem(val) {
      this.$emit("deleteItem", val);
    },
    increase(val) {
      this.$emit("increase", val);
    },
    decrease(val) {
      this.$emit("decrease", val);
    }
  },
  computed: {
    calculateTotal() {
      let totalPrice = this.data.reduce((acc, curr) => {
        return acc + (curr.itemPrice * curr.number)
      }, 0)
      return totalPrice;
    }
  }
};
</script>

<style scoped>

.cart-component {
  max-height: 70vh;
  padding: 10px;
  overflow: scroll;
  background-color: #4f465e;
  border-radius: 5px;
  color: white;
}

.total-price {
  width: 95%;
  height: 50px;
  padding-left: 20px;
  border:none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-color: #3c314e;
}
</style>
