<template>
  <div class="cart-item d-flex align-items-center">
    <img class="cart-img me-2" :src="data.photo"/>
    <div class="cart-desc">
        <p class="h-6 m-0">{{data.title}}</p>
        <p class="m-0 mb-3">Total: {{data.total}}</p>
      <div class="cart-action d-flex align-items-center justify-content-between">
        <b-button size="sm">
          -
        </b-button>
        <p class="m-0">{{ data.number }}</p>
        <b-button size="sm">
          +
        </b-button>
        <b-button size="sm">
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
  }
};
</script>


<style scoped>
.cart-item {
  width: 100%;
}

.cart-img {
    width: 40%;
}

.cart-desc {
    width: 60%;
}

.cart-action {
    width: 100%;
}
</style>
