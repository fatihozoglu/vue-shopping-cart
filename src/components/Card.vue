<template>
  <!-- Card Starts Here -->
  <b-card style="max-width: 23rem;">
    <!-- Card image, title and category section starts here -->
    <b-card-img
      class="mb-3"
      :src="selectedPhoto.photo"
      :alt="shoesData.category"
    ></b-card-img>
    <div
      class="small-photos-container d-flex align-items-center justify-content-start gap-2"
    >
      <div
        class="small-photo"
        v-for="(item, index) in shoesData.photos"
        :key="index"
      >
        <input
          v-model="selectedPhoto"
          type="radio"
          :id="shoesData.id + '-photo-' + index"
          :name="shoesData.id + 'photos'"
          :value="item"
        />
        <label
          class="d-flex align-items-center justify-content-center"
          :for="shoesData.id + '-photo-' + index"
        >
          <img
            :style="{ border: '2px solid ' + setColor }"
            :src="item.photo"
            alt="Shoe Photo"
          />
        </label>
      </div>
    </div>
    <h5 class="m-0">{{ shoesData.title }}</h5>
    <p class="m-0 mb-2">Category: {{ shoesData.category }}</p>
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

    <p class="h4 m-0 mb-3">Price: ${{ computedPrice }}</p>

    <!-- Size Selecting Part Starts Here -->
    <p class="m-0">Available Sizes:</p>
    <div class="d-flex align-items-center justify-content-between mb-4">
      <div class="size" v-for="(item, index) in shoesData.sizes" :key="index">
        <input
          class="size-input"
          v-model="selected"
          type="radio"
          :id="shoesData.id + '-' + item"
          :name="shoesData.id + 'sizes'"
          :value="item"
        />
        <label
          :style="{ border: '2px solid ' + setColor }"
          class="d-flex align-items-center justify-content-center rounded"
          :for="shoesData.id + '-' + item"
          >{{ item }}</label
        >
      </div>
    </div>
    <!-- Size Selecting Part Ends Here -->

    <!-- Price, Number of selected items, Add to Card Button Section Starts Here-->

    <div class="d-flex align-items-center justify-content-between gap-3">
      <select
        :style="{ border: '2px solid ' + setColor }"
        class="item-number rounded"
        v-model="itemNumber"
        name="item-number"
        id="item-number"
      >
        <option v-for="(i, index) in 10" :value="i" :key="index">{{
          i
        }}</option>
      </select>
      <b-button
        @click="onAddItem"
        :style="{ border: '2px solid ' + setColor }"
        class="rounded outline-none w-75"
        variant="light"
        >Add to Cart</b-button
      >
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
      selectedPhoto: {
        color: this.shoesData.photos[0].color,
        photo: this.shoesData.photos[0].photo,
      },
      itemNumber: 1,
    };
  },
  methods: {
    onAddItem() {
      this.$emit("onAddItem", {
        id: this.shoesData.id,
        photo: this.selectedPhoto.photo,
        color: this.selectedPhoto.color,
        title: this.shoesData.title,
        number: this.itemNumber,
        size: this.selected === 0 ? 36 : this.selected,
        itemPrice: this.computedPrice,
      });
    },
  },
  computed: {
    //Calculate the price based on selected shoe size
    computedPrice() {
      if (this.selected % 36 === 0) {
        return this.shoesData.price;
      } else {
        let num = this.selected % 36;
        return this.shoesData.price + num * 10;
      }
    },
    setColor() {
      let color;
      switch (this.selectedPhoto.color) {
        case "Pink":
          color = "#c71f64";
          break;
        case "Blue":
          color = "#63b2df";
          break;
        case "Green":
          color = "#9ac488";
          break;
        case "Lightseagreen":
          color = "#29b6a2";
          break;
        case "Darkblue":
          color = "#253b7b";
          break;
        case "Black":
          color = "#1a1c1c";
          break;
        case "Red":
          color = "#b3091c";
          break;
        case "Grey":
          color = "#4c5051";
          break;
        case "Purple":
          color = "#512a5e";
          break;
        case "Brown":
          color = "#ac600e";
      }
      return color;
    },
  },
};
</script>

<style scoped>

.small-photos-container {
  width: 100%;
  height: 80px;
}

.small-photo {
  overflow: hidden;
  height: 100%;
}

.small-photo > label {
  height: 100%;
  cursor: pointer;
}

.small-photo > label > img {
  height: 80%;
  width: auto;
  border-radius: 5px;
}

.small-photo > input {
  display: none;
}

.size {
  width: 40px;
  height: 40px;
}

.size-input {
  display: none;
  color: black;
}

.size-input:checked + label {
  background-color: var()
}

.size > label {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.item-number {
  height: 38px;
  padding-left: 10px;
  cursor: pointer;
}

.checked {
  color: #fcba03;
}

.unchecked {
  color: grey;
}
</style>
