<template>
  <v-app>
    <div v-if="!isInitiated"></div>
    <v-app-bar
      app
      class="px-16"
      :color="$vuetify.theme.dark ? 'backgroundColor' : 'primary'"
      v-if="isAuthenticated && isInitiated"
    >
      <v-btn fixed text fab @click="switchTheme">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-container class="py-0 fill-height" fluid>
        <h1 class="font-weight-black">My Restaurant</h1>
        <v-spacer></v-spacer>
        <MenuItem
          v-for="item in menuItems"
          :key="item.label"
          :to="item.to"
          :label="item.label"
          :icon="item.icon"
        />
        <v-spacer></v-spacer>
        <v-spacer />
        <v-btn @click="logout" text rounded color="primary">
          <v-icon class="mx-1">mdi-logout-variant</v-icon>
          Logout
        </v-btn>
      </v-container>
      <v-icon left>mdi-account</v-icon>
      <h3>{{ loggedInUser.name }}</h3>
    </v-app-bar>
    <v-main class="mainBackgroundColor" v-if="isInitiated">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MenuItem from "@/components/Navbar/MenuItem";

export default {
  name: "App",
  components: { MenuItem },
  data: () => ({
    isInitiated: false,
    menuItems: [
      {
        to: "/cart",
        label: "Cart",
        icon: "mdi-cart-outline",
      },
      {
        to: "/orders",
        label: "Orders",
        icon: "mdi-script-outline",
      },
      {
        to: "/",
        label: "Menu",
        icon: "mdi-food",
      },
    ],
  }),
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  methods: {
    ...mapActions(["logout"]),
    switchTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("isDark", this.$vuetify.theme.dark ? "1" : "0");
    },
  },
  async beforeCreate() {
    try {
      let isDark = localStorage.getItem("isDark");
      if (isDark === null) {
        localStorage.setItem("isDark", "1");
        isDark = "1";
      }
      this.$vuetify.theme.dark = isDark === "1";

      if (this.isAuthenticated) {
        await this.$router.push({ name: "Home" });
      } else {
        await this.$router.push({ name: "Login" });
      }
      await this.$store.dispatch("whoAmI");
    } finally {
      this.isInitiated = true;
    }
  },
};
</script>
