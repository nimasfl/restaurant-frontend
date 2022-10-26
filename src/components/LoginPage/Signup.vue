<template>
  <v-form @submit.prevent="signup" ref="form">
    <v-card class="px-4 py-8 backgroundColor">
      <v-card-text>
        <v-text-field
          autofocus
          :rules="rules"
          label="Full Name"
          v-model="name"
          outlined
          color="primary"
        />
        <v-text-field
          :rules="rules"
          label="Username"
          v-model="username"
          outlined
          color="primary"
          validate-on-blur
        />
        <v-text-field
          :rules="rules"
          label="Password"
          v-model="password"
          outlined
          color="primary"
          validate-on-blur
        />
      </v-card-text>
      <v-card-actions>
        <v-btn type="submit" block color="btnPrimary">Sign up</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
export default {
  name: "Signup",
  data: () => ({
    name: "",
    username: "",
    password: "",
    rules: [],
  }),
  methods: {
    signup() {
      this.rules = [this.isRequired];
      this.$nextTick(() => {
        if (!this.$refs.form.validate()) {
          return;
        }
        this.$store.dispatch("signup", {
          name: this.name,
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
