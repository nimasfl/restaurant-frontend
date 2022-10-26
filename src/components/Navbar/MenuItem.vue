<template>
  <v-btn :to="to" text rounded>
    <v-icon class="mx-1">{{ icon }}</v-icon>
    {{ label }}
  </v-btn>
</template>
<script>
export default {
  name: "MenuItem",
  // props: ["to", "label"],
  props: {
    to: String,
    label: String,
    icon: String,
  },
};
</script>
