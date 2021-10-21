<template>
  <div class="alert-component">
    {{ num }} items added to Cart
  </div>
</template>

<script>

export default {
  name: "Alert",
  props: {
    num: Number,
  },
};
</script>

<style scoped>
.alert-component {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  background-color: rgb(105, 105, 105);
  color: white;
  border-radius: 5px;
}
</style>
