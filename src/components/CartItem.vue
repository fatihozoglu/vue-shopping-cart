<template>
  <div class="cart-item d-flex align-items-center">
    <img class="cart-item-img me-2" :src="data.photo" />

    <div class="cart-item-desc">
      <p class="m-0">{{ data.title }}</p>
      <p class="m-0">Size: {{ data.size }} <span class="ms-2">Color: {{data.color}}</span> </p>
      <p class="m-0 mb-1">Total: ${{ data.number * data.itemPrice }}</p>

      <div
        class="cart-item-btns d-flex align-items-center justify-content-between"
      >
        <b-button class="custom-btn" @click="decrement" size="md">
          -
        </b-button>

        <p class="m-0">{{ data.number }}</p>

        <b-button class="custom-btn" @click="increment" size="md">
          +
        </b-button>
        
        <b-button class="custom-btn" @click="deleteItem" size="md">
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
      this.$emit("decrease", {id: this.data.id, size: this.data.size, color: this.data.color});
      },
    increment: function() {
      this.$emit("increase", {id: this.data.id, size: this.data.size, color: this.data.color});
    },
    deleteItem: function() {
      this.$emit("deleteItem", {id: this.data.id, size: this.data.size, color: this.data.color});
    }
  }
};
</script>

<style scoped>
.cart-item {
  width: 100%;
  height: 120px;
}

.cart-item-img {
  width: 40%;
  border-radius: 10px;
}

.cart-item-desc {
  font-size: 14px;
  width: 60%;
}

.cart-item-btns {
  width: 80%;
}

.custom-btn {
  background-color: #3c314e;
  border: none;
}

.custom-btn:focus {
  box-shadow: none;
}

@media only screen and (max-width: 430px) {
  .cart-item {
    margin-bottom: 20px;
  }
}
</style>
