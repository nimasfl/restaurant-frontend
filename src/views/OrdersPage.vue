<template>
  <v-sheet
    color="backgroundColor"
    min-height="70vh"
    rounded="lg"
    class="px-4 py-1"
  >
    <v-row>
      <Order
        v-for="(order, index) in orders"
        :index="index"
        :total-price="order.totalPrice"
        :key="order.id"
        cols="4"
        :id="order.id"
        :created-on="order.createdOn"
        :items="order.items"
        :address="order.address"
      />
    </v-row>
  </v-sheet>
</template>

<script>
import Order from "@/components/OrderPage/Order";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "OrderPage",
  components: { Order },
  computed: {
    ...mapGetters(["orders"]),
  },
  methods: {
    ...mapActions(["getOrders"]),
  },
  async mounted() {
    await this.getOrders();
  },
};
</script>

<style scoped></style>
