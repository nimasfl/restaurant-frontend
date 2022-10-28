<template>
  <v-col>
    <v-card class="py-1 my-3" color="backgroundColor darken-1">
      <v-card-title> Order #{{ index + 1 }}</v-card-title>
      <v-card-subtitle> {{ createdOn | parseDate }}</v-card-subtitle>
      <v-card-text>
        <div :key="item.id" v-for="item in items">
          {{ item.foodName }} x {{ item.count }} ({{ item.totalPrice }}$)
        </div>
        <div>Shipping (10$)</div>
        <v-divider class="my-2" />
        Total Price: {{ totalPrice + 10 }}$
      </v-card-text>
      <v-card-actions class="mx-2">Address: {{ address }}</v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "Order",
  props: {
    id: String,
    index: Number,
    createdOn: String,
    totalPrice: Number,
    items: Array,
    address: String,
  },
  filters: {
    parseDate: (value) => {
      if (!value) return "";
      return new Date(value).toLocaleString().replace(",", "");
    },
  },
};
</script>
