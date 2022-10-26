<template>
  <v-sheet color="backgroundColor" rounded="lg" class="px-4 pb-4 pt-3">
    <v-row>
      <v-col class="font-weight-black mb-8"> Price Summary:</v-col>
    </v-row>
    <v-row dense>
      <v-col cols="8">Food Cost:</v-col>
      <v-col cols="4">25$</v-col>
    </v-row>
    <v-row dense>
      <v-col cols="8">Shipping Cost:</v-col>
      <v-col cols="4"> 10$</v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-divider />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="8">Total Cost:</v-col>
      <v-col cols="4">35$</v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  name: "PriceSummary",
};
</script>
