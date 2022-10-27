<template>
  <v-form @submit.prevent="login" ref="form">
    <v-card class="px-4 py-8 backgroundColor">
      <v-card-text>
        <v-text-field
          autofocus
          :rules="rules"
          label="Username"
          v-model="username"
          outlined
          :color="'primary'"
          validate-on-blur
        />
        <v-text-field
          :rules="rules"
          label="Password"
          v-model="password"
          type="password"
          outlined
          color="primary"
          validate-on-blur
        />
      </v-card-text>
      <v-card-actions>
        <v-btn type="submit" block color="btnPrimary">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    rules: [],
    username: "",
    password: "",
  }),
  methods: {
    async login() {
      this.rules = [this.isRequired];
      this.$nextTick(async () => {
        if (!this.$refs.form.validate()) {
          return;
        }
        await this.$store.dispatch("login", {
          username: this.username,
          password: this.password,
        });
        this.rules = [];
      });
    },
  },
};
</script>

<style scoped></style>
