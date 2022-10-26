<template>
  <v-card color="backgroundColor darken-1">
    <v-row>
      <v-col cols="2">
        <v-img height="100" contain src="/food.jpg" />
      </v-col>
      <v-col cols="4" align-self="center">
        <v-row>
          <span>Double Burger</span>
        </v-row>
        <v-row>
          <span>25$</span>
        </v-row>
      </v-col>
      <v-col cols="4" class="d-flex justify-center">
        <v-row class="d-flex justify-center align-center">
          <v-btn
            x-small
            height="38"
            right
            rounded
            class="mr-8"
            color="btnPrimary"
          >
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <span>2</span>
          <v-btn x-small height="38" rounded class="ml-8" color="btnPrimary">
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
};
</script>
