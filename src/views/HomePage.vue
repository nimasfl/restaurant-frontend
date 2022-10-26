<template>
  <v-row>
    <v-col cols="3">
      <v-sheet color="backgroundColor" rounded="lg" class="px-4 pb-4 pt-1">
        <v-checkbox
          v-for="n in 5"
          :key="n"
          :label="'some shit ' + n"
          color="primary"
        />
        <v-divider class="my-2"></v-divider>
        <v-list-item-title> Reset Filters </v-list-item-title>
      </v-sheet>
    </v-col>

    <v-col>
      <v-sheet
        color="backgroundColor"
        min-height="70vh"
        rounded="lg"
        class="px-4 py-6"
      >
        <v-row>
          <v-col
            v-for="n in 15"
            :key="n"
            cols="12"
            xl="4"
            lg="4"
            md="6"
            sm="12"
          >
            <v-card color="backgroundColor darken-1">
              <v-img
                height="250"
                src="/food.jpg"
                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              ></v-img>
              <v-card-title>Double Burger</v-card-title>
              <v-card-title class="pt-0">25$</v-card-title>
              <v-card-actions>
                <v-btn color="btnPrimary">
                  <v-icon left>mdi-cart-plus</v-icon>
                  Add to cart
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "HomePage",
  components: {},
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  methods: {
    ...mapMutations(["Login", "Logout"]),
  },
};
</script>
