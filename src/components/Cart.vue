<template>
  <div>
    <h4 class="ms-1">Cart</h4>
    <CartItem @deleteItem="deleteItem" v-for="(item, index) of data" :key="index" :data="item" />
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
    deleteItem: function(value) {
      this.$emit("deleteItem", value);
    }
  }
};
</script>

<style>
</style>
