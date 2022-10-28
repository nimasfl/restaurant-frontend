<template>
  <v-card color="backgroundColor darken-1">
    <v-row>
      <v-col cols="2">
        <v-img height="100" contain src="/food.jpg" />
      </v-col>
      <v-col cols="4" align-self="center">
        <v-row>
          <span>{{ foodName }}</span>
        </v-row>
        <v-row>
          <span>{{ price }}$</span>
        </v-row>
      </v-col>
      <v-col cols="4" class="d-flex justify-center">
        <v-row class="d-flex justify-center align-center">
          <v-btn
            :loading="isLoading"
            x-small
            @click="subtract"
            height="38"
            right
            rounded
            class="mr-8"
            color="btnPrimary"
          >
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <span>{{ count }}</span>
          <v-btn
            :loading="isLoading"
            @click="add"
            x-small
            height="38"
            rounded
            class="ml-8"
            color="btnPrimary"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "CartItem",
  props: ["id", "foodName", "foodId", "count", "price", "isLoading"],
  methods: {
    add() {
      this.$emit("change", { count: this.count + 1, foodId: this.foodId });
    },
    subtract() {
      this.$emit("change", { count: this.count - 1, foodId: this.foodId });
    },
  },
};
</script>
