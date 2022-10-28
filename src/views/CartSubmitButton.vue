<template>
  <v-sheet color="transparent" rounded="lg" class="pa-0 d-flex">
    <v-btn
      v-if="cartItems.length !== 0"
      @click="submitOrder"
      :loading="isLoading"
      color="backgroundColor"
      width="100%"
      :to="{ name: 'Cart' }"
      class="my-6"
    >
      Submit Request
    </v-btn>
  </v-sheet>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CartSubmitButton",
  computed: {
    ...mapGetters(["isLoading", "cartItems", "address"]),
  },
  props: ["form"],
  methods: {
    ...mapActions(["createOrder"]),
    async submitOrder() {
      if (!this.address) {
        alert("please fill address first.");
      }
      await this.createOrder({ address: this.address });
    },
  },
};
</script>
