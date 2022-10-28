<template>
  <v-form :ref="form">
    <v-row>
      <v-col cols="3">
        <PriceSummary />
        <CartSubmitButton :form="form" />
      </v-col>
      <v-col cols="9">
        <CartSummary />
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import PriceSummary from "@/components/CartPage/PriceSummary";
import CartSummary from "@/components/CartPage/CartSummary";
import CartSubmitButton from "@/views/CartSubmitButton";

export default {
  name: "HomePage",
  components: { CartSubmitButton, CartSummary, PriceSummary },
  data: () => ({
    form: null,
  }),
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  methods: {
    ...mapMutations(["Login", "Logout"]),
  },
};
</script>
