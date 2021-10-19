<template>
  <!-- Card Starts Here -->
  <b-card style="max-width: 23rem;">
    <!-- Card image, title and category section starts here -->
    <b-card-img
      class="mb-3"
      :src="shoesData.photo"
      :alt="shoesData.category"
    ></b-card-img>
    <h3>{{ shoesData.title }}</h3>
    <p class="m-0">Category: {{ shoesData.category }}</p>
    <!-- Card image, title and category section ends here -->

    <!-- Card Rating Starts Here -->
    <div class="d-flex alignt-items-center mb-2">
      Rating:
      <div v-for="(item, index) of shoesData.rating" :key="index">
        <span class="fa fa-star checked"></span>
      </div>
      <div v-for="(item, index) of 5 - shoesData.rating" :key="index + 5">
        <span class="fa fa-star unchecked"></span>
      </div>
    </div>
    <!-- Card Rating Ends Here -->

    <b-card-text>
      {{ shoesData.summary }}
    </b-card-text>

    <!-- Size Selecting Part Starts Here -->
    <p class="m-0">Available Sizes:</p>
    <div class="d-flex align-items-center justify-content-between mb-4">
      <div class="size" v-for="(item, index) in shoesData.sizes" :key="index">
        <input
          class="size-input"
          v-model="selected"
          type="radio"
          :id="shoesData.id + '-' + item"
          name="sizes"
          :value="item"
        />
        <label
          class="d-flex align-items-center justify-content-center"
          :for="shoesData.id + '-' + item"
          >{{ item }}</label
        >
      </div>
    </div>
    <!-- Size Selecting Part Ends Here -->

    <!-- Price, Number of selected items, Add to Card Button Section Starts Here-->
    <div>
      <div class="d-flex align-items-center justify-content-between">
        <p class="m-0 h4">Price: ${{ computedPrice }}</p>
        <select
          class="item-number"
          v-model="itemNumber"
          name="item-number"
          id="item-number"
        >
          <option v-for="(i, index) in 10" :value="i" :key="index">{{
            i
          }}</option>
        </select>
        <b-button @click="onAddItem" variant="secondary">Add to Cart</b-button>
      </div>
    </div>
    <!-- Price, Number of selected items, Add to Card Button Section Ends Here-->
  </b-card>
  <!-- Card Ends Here -->
</template>

<script>
export default {
  name: "Card",
  props: {
    shoesData: Object,
  },
  data() {
    return {
      selected: 0,
      itemNumber: 1,
    };
  },
  methods: {
    onAddItem: function() {
      this.$emit("onAddItem", {
        id: this.shoesData.id,
        photo: this.shoesData.photo,
        title: this.shoesData.title,
        number: Number(this.itemNumber),
        total: Number(this.computedPrice * this.itemNumber),
      });
    },
  },
  computed: {
    //Calculate the price based on selected shoe size
    computedPrice: function() {
      if (this.selected % 36 === 0) {
        return this.shoesData.price;
      } else {
        let num = this.selected % 36;
        return this.shoesData.price + num * 10;
      }
    },
  },
};
</script>

<style scoped>
.size {
  width: 40px;
  height: 40px;
  background-color: rgb(224, 224, 224);
}

.size-input {
  display: none;
}

.size > label {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.size-input:checked + label {
  background-color: rgb(141, 141, 141);
}

.item-number {
  width: 15%;
  height: 35px;
  padding-left: 10px;
  cursor: pointer;
  color: white;
  background-color: rgb(136, 136, 136);
  border: none;
  border-radius: 5px;
}

.checked {
  color: #fcba03;
}

.unchecked {
  color: grey;
}
</style>
