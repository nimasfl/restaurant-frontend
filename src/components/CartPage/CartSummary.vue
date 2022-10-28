<template>
  <v-form ref="form">
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
        v-if="cartItems.length !== 0"
        background-color="backgroundColor darken-1"
        label="Address"
        outlined
        :rules="rules"
        color="primary"
      />
      <v-btn v-if="cartItems.length !== 0" class="mb-8" outlined color="primary"
        >Submit</v-btn
      >
    </v-sheet>
  </v-form>
</template>

<script>
import CartItem from "@/components/CartPage/CartItem";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CartSummary",
  components: { CartItem },
  data: () => ({
    rules: [],
  }),
  computed: {
    ...mapGetters(["cartItems", "isLoading"]),
  },
  async mounted() {
    await this.getCartItems();
  },
  methods: {
    ...mapActions(["getCartItems", "changeCartItem"]),
    async createOrder() {
      this.rules = [this.isRequired];
      this.$nextTick(async () => {
        if (!this.$refs.form.validate()) {
          return;
        }
        await this.$store.dispatch("createOrder", {});
        await this.$router.push({ name: "Orders" });
        this.rules = [];
      });
    },
  },
};
</script>
