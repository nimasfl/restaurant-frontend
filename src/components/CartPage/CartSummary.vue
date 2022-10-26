<template>
  <v-form ref="form">
    <v-sheet
      color="backgroundColor"
      min-height="70vh"
      rounded="lg"
      class="px-4 py-1"
    >
      <div v-for="n in 3" :key="n" class="py-5 my-5">
        <CartItem />
      </div>
      <v-textarea
        background-color="backgroundColor darken-1"
        label="Address"
        outlined
        :rules="rules"
        color="primary"
      />
      <v-btn class="mb-8" outlined color="primary">Submit</v-btn>
    </v-sheet>
  </v-form>
</template>

<script>
import CartItem from "@/components/CartPage/CartItem";

export default {
  name: "CartSummary",
  components: { CartItem },
  data: () => ({
    rules: [],
  }),
  methods: {
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
