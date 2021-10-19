<template>
  <div class="cart-item d-flex align-items-center">
    <img class="cart-img me-2" :src="data.photo" />
    <div class="cart-desc">
      <p class="m-0">{{ data.title }}</p>
      <p class="m-0">Size: {{ data.size }}</p>
      <p class="m-0 mb-1">Total: ${{ data.number * data.itemPrice }}</p>
      <div
        class="cart-action d-flex align-items-center justify-content-between"
      >
        <b-button @click="decrement" size="md">
          -
        </b-button>
        <p class="m-0">{{ data.number }}</p>
        <b-button @click="increment" size="md">
          +
        </b-button>
        <b-button @click="deleteItem" size="md">
          <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  data() {
    return {};
  },
  props: {
    data: Object,
  },
  methods: {
    decrement: function() {
      if(this.data.number !== 0) this.data.number--;
      if(this.data.number === 0) {
        this.$emit("deleteItem", {id: this.data.id, size: this.data.size});
      }
    },
    increment: function() {
      this.data.number++;
    },
    deleteItem: function() {
      this.$emit("deleteItem", {id: this.data.id, size: this.data.size});
    }
  }
};
</script>

<style scoped>
.cart-item {
  width: 100%;
  height: 120px;
}

.cart-img {
  width: 40%;
  border-radius: 10px;
}

.cart-desc {
  font-size: 14px;
  width: 60%;
}

.cart-action {
  width: 80%;
}

@media only screen and (max-width: 430px) {
  .cart-item {
    margin-bottom: 20px;
  }
}
</style>
