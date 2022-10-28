<template>
  <v-sheet color="backgroundColor" rounded="lg" class="px-4 pb-4 pt-3">
    <v-row>
      <v-col class="font-weight-black mb-8"> Price Summary:</v-col>
    </v-row>
    <v-row dense>
      <v-col cols="8">Food Cost:</v-col>
      <v-col cols="4">{{ foodPrice }}$</v-col>
    </v-row>
    <v-row dense>
      <v-col cols="8">Shipping Cost:</v-col>
      <v-col cols="4"> 10$</v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-divider />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="8">Total Cost:</v-col>
      <v-col cols="4">{{ foodPrice + 10 }}$</v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PriceSummary",
  computed: {
    ...mapGetters(["cartItems"]),
    foodPrice() {
      return this.cartItems
        .map((item) => item.price * item.count)
        .reduce((a, b) => a + b, 0);
    },
  },
};
</script>
