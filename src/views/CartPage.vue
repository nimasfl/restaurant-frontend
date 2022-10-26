<template>
  <v-row>
    <v-col cols="3">
      <PriceSummary />
    </v-col>
    <v-col cols="9">
      <CartSummary />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import PriceSummary from "@/components/CartPage/PriceSummary";
import CartSummary from "@/components/CartPage/CartSummary";

export default {
  name: "HomePage",
  components: { CartSummary, PriceSummary },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  methods: {
    ...mapMutations(["Login", "Logout"]),
  },
};
</script>
