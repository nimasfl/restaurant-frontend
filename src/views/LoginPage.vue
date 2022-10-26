<template>
  <v-container class="d-flex justify-center fill-height">
    <div>
      <h1 class="text-center mb-16">Welcome to My Restaurant</h1>
      <v-card min-width="500" class="mt-16">
        <v-tabs
          v-model="selectedMenu"
          centered
          fixed-tabs
          background-color="backgroundColor"
        >
          <v-tabs-slider color="primary"></v-tabs-slider>
          <v-tab> Log In </v-tab>
          <v-tab> Sign Up </v-tab>
        </v-tabs>
        <v-tabs-items v-model="selectedMenu">
          <v-tab-item :value="0" key="Login"> <Login /> </v-tab-item>
          <v-tab-item :value="1" key="SignUp"> <Signup /> </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import Signup from "@/components/LoginPage/Signup";
import Login from "@/components/LoginPage/Login";

export default {
  name: "LoginPage",
  components: {
    Login,
    Signup,
  },
  data: () => ({
    selectedMenu: "Login",
  }),
};
</script>

<style scoped></style>
