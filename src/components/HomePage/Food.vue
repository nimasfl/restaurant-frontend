<template>
  <v-col cols="12" xl="4" lg="4" md="6" sm="12">
    <v-card color="backgroundColor darken-1">
      <v-img height="250" :src="imageUrl" />
      <v-card-text
        style="min-height: 100px"
        class="font-weight-black text-subtitle-1 heading"
      >
        {{ name }}
      </v-card-text>
      <v-card-text class="pt-0 font-weight-black text-subtitle-1 heading"
        >{{ price }}$</v-card-text
      >
      <v-card-actions class="d-flex justify-center align-center text-center">
        <v-btn
          :loading="isLoading"
          color="btnPrimary"
          v-if="!count"
          @click="add"
        >
          <v-icon left>mdi-cart-plus</v-icon>
          Add to cart
        </v-btn>
        <div v-else>
          <v-btn
            :loading="isLoading"
            x-small
            height="38"
            right
            rounded
            class="mr-8"
            @click="subtract"
            color="btnPrimary"
          >
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <span>{{ count }}</span>
          <v-btn
            :loading="isLoading"
            x-small
            height="38"
            rounded
            @click="add"
            class="ml-8"
            color="btnPrimary"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<script>
export default {
  name: "Food",
  props: ["id", "name", "price", "imageUrl", "count", "isLoading"],
  methods: {
    add() {
      this.$emit("change", { count: this.count + 1, foodId: this.id });
    },
    subtract() {
      this.$emit("change", { count: this.count - 1, foodId: this.id });
    },
  },
};
</script>
