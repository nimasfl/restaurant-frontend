<template>
  <v-row>
    <v-col cols="3">
      <v-sheet color="backgroundColor" rounded="lg" class="px-4 py-0">
        <v-radio-group
          @change="selectFilter"
          :value="selectedFilter"
          class="mt-0"
        >
          <v-radio
            v-for="filter in filters"
            class="my-4"
            :key="filter"
            :value="filter"
            :label="filter"
            color="primary"
          />
        </v-radio-group>
      </v-sheet>
      <v-sheet color="transparent" rounded="lg" class="pa-0 d-flex">
        <v-btn
          color="backgroundColor"
          width="100%"
          :to="{ name: 'Cart' }"
          class="my-6"
        >
          Submit Request
        </v-btn>
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
          <Food
            @change="changeCartItem"
            v-for="food in foods"
            :isLoading="isLoading"
            :id="food.id"
            :key="food.id"
            :count="food.count"
            :image-url="food.imageUrl"
            :name="food.name"
            :price="food.price"
          />
        </v-row>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import Food from "@/components/HomePage/Food";

export default {
  name: "HomePage",
  components: { Food },
  computed: {
    ...mapGetters([
      "isAuthenticated",
      "foods",
      "filters",
      "selectedFilter",
      "isLoading",
    ]),
  },
  methods: {
    ...mapMutations(["Login", "Logout", "selectFilter"]),
    ...mapActions(["getFoods", "getFilters", "changeCartItem"]),
  },
  async mounted() {
    await this.getFoods();
    await this.getFilters();
  },
  watch: {
    async selectedFilter() {
      await this.getFoods();
    },
  },
};
</script>
