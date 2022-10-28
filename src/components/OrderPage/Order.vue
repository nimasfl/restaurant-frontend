<template>
  <v-col>
    <v-card class="py-1 my-3" color="backgroundColor darken-1">
      <v-card-title> Order #{{ index + 1 }}</v-card-title>
      <v-card-subtitle> {{ createdOn | parseDate }}</v-card-subtitle>
      <v-card-text>
        <div :key="item.id" v-for="item in items">
          {{ item.name }} x {{ item.count }}
        </div>
      </v-card-text>
      <v-card-actions class="mx-2">Address: {{ address }}</v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "Order",
  props: {
    id: Number,
    index: Number,
    createdOn: Date,
    items: Array,
    address: String,
  },
  filters: {
    parseDate: (value) => {
      if (!value) return "";
      return value.toLocaleString().replace(",", "");
    },
  },
};
</script>
