<template>
  <div class="card grey lighten-4">
    <div class="card-content">
      <h2>Login</h2>

      <Form @submit="handleLogin" :validation-schema="schema">
        <div class="input-field">
          <Field name="username" type="text" />
          <label>Username</label>
          <ErrorMessage name="username" class="helper-text red-text" />
        </div>

        <div class="input-field">
          <Field name="password" type="password" />
          <label>Password</label>
          <ErrorMessage name="password" class="helper-text red-text" />
        </div>

        <button class="waves-effect waves-light btn" :disabled="loading">
          Sign in
        </button>

        <div>
          <label v-if="message" class="helper-text red-text">
            {{ message }}
          </label>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Username is required !"),
      password: yup.string().required("Password is required !"),
    });

    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    async handleLogin(user) {
      this.loading = true;

      try {
        await this.$store.dispatch("auth/login", user);
        this.$router.push("/profile");
      } catch (err) {
        this.message = "Wrong username or password !";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
</style>
