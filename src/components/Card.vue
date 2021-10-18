<template>
  <b-card
    :title="data.title"
    :sub-title="data.category"
    :img-alt="data.category"
    style="max-width: 25rem;"
  >
    <b-card-img class="mb-3" :src="data.photo"></b-card-img>
    <b-card-text>
      {{ data.summary }}
    </b-card-text>
    <div>
      <div class="d-flex align-items-center justify-content-evenly">
        <p class="m-0 h4">{{ data.price }}$</p>
        <b-button variant="secondary">Add to Cart</b-button>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      selected: 36,
    };
  },
  props: {
    data: Object,
  },
};
</script>

<style scoped></style>
