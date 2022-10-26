<template>
  <v-sheet
    color="backgroundColor"
    min-height="70vh"
    rounded="lg"
    class="px-4 py-1"
  >
    <v-row>
      <Order
        v-for="order in orders"
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

export default {
  name: "OrderPage",
  components: { Order },
  data: () => ({
    orders: [
      {
        id: 1,
        createdOn: new Date(),
        items: [
          { id: 1, name: "item1", quantity: 4 },
          { id: 2, name: "item2", quantity: 8 },
        ],
        address: "123 Main Street, New York, NY 10030",
      },
      {
        id: 2,
        createdOn: new Date(),
        items: [
          { id: 3, name: "item1", quantity: 4 },
          { id: 4, name: "item2", quantity: 8 },
        ],
        address: "123 Main Street, New York, NY 10030",
      },
    ],
  }),
};
</script>

<style scoped></style>
