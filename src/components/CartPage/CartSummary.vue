<template>
  <v-sheet
    color="backgroundColor"
    min-height="70vh"
    rounded="lg"
    class="px-4 py-1"
  >
    <div v-if="cartItems.length === 0" class="justify-center align-center">
      <div class="text-center pa-12">Your cart is empty.</div>
      <v-btn class="d-flex my-6" :to="{ name: 'Home' }" outlined
        >Go Back To Menu
      </v-btn>
    </div>

    <div
      v-else
      v-for="cartItem in cartItems"
      :key="cartItem.id"
      class="py-5 my-5"
    >
      <CartItem
        :isLoading="isLoading"
        :id="cartItem.id"
        :food-name="cartItem.foodName"
        :price="cartItem.price"
        @change="changeCartItem"
        :food-id="cartItem.foodId"
        :count="cartItem.count"
      />
    </div>
    <v-textarea
      :value="address"
      @change="setAddress"
      v-if="cartItems.length !== 0"
      background-color="backgroundColor darken-1"
      label="Address"
      outlined
      :rules="rules"
      color="primary"
    />
  </v-sheet>
</template>

<script>
import CartItem from "@/components/CartPage/CartItem";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "CartSummary",
  components: { CartItem },
  data: () => ({
    rules: [],
  }),
  computed: {
    ...mapGetters(["cartItems", "isLoading", "address"]),
  },
  async mounted() {
    await this.getCartItems();
  },
  methods: {
    ...mapActions(["getCartItems", "changeCartItem", "createOrder"]),
    ...mapMutations(["setAddress"]),
  },
};
</script>
