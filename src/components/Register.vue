<template>
  <div class="card grey lighten-4">
    <div class="card-content">
      <h2 v-if="edit">Edit profile</h2>
      <h2 v-else>Register</h2>

      <Form @submit="handleRegister" :validation-schema="schema">
        <div class="input-field">
          <Field
            id="username"
            name="username"
            type="text"
            :disabled="edit"
            :value="userToEdit.username"
          />
          <label for="username">Username</label>
          <ErrorMessage name="username" class="helper-text red-text" />
        </div>

        <div class="input-field">
          <Field id="password" name="password" type="password" />
          <label v-if="edit" for="password">
            Password (can be not informed)
          </label>
          <label v-else for="password"> Password </label>
          <ErrorMessage name="password" class="helper-text red-text" />
        </div>

        <div class="input-field">
          <Field
            id="email"
            name="email"
            type="email"
            :value="userToEdit.email"
          />
          <label for="email">Email</label>
          <ErrorMessage name="email" class="helper-text red-text" />
        </div>

        <div class="input-field">
          <Field
            id="phone_number"
            name="phone_number"
            type="text"
            :value="userToEdit.phone_number"
          />
          <label for="phone_number">Phone number</label>
          <ErrorMessage name="phone_number" class="helper-text red-text" />
        </div>

        <div class="input-field">
          <Field
            id="firstname"
            name="firstname"
            type="text"
            :value="userToEdit.firstname"
          />
          <label for="firstname">Firstname</label>
          <ErrorMessage name="firstname" class="helper-text red-text" />
        </div>

        <div class="input-field">
          <Field
            id="lastname"
            name="lastname"
            type="text"
            :value="userToEdit.lastname"
          />
          <label for="lastname">Lastname</label>
          <ErrorMessage name="lastname" class="helper-text red-text" />
        </div>

        <div class="input-field">
          <Field
            id="birthday"
            name="birthday"
            type="text"
            :value="userToEdit.birthday"
          />
          <label for="birthday">Birthday</label>
          <ErrorMessage name="birthday" class="helper-text red-text" />
        </div>

        <div class="input-field">
          <Field
            id="birthplace"
            name="birthplace"
            type="text"
            :value="userToEdit.birthplace"
          />
          <label for="birthplace">Birth place</label>
          <ErrorMessage name="birthplace" class="helper-text red-text" />
        </div>

        <div v-if="isAdmin" class="input-field">
          <Field
            id="auth_level"
            name="auth_level"
            type="text"
            :value="userToEdit.auth_level"
          />
          <label for="auth_level">Auth level (1=Owner | 2=Admin)</label>
          <ErrorMessage name="auth_level" class="helper-text red-text" />
        </div>

        <button class="waves-effect waves-light btn" :disabled="loading">
          <div v-if="edit">Save and exit</div>
          <div v-else>Sign up</div>
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
import UserService from "../services/account.service";
import M from "materialize-css";
import * as yup from "yup";

export default {
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup
        .string()
        .required("Username is required !")
        .min(3, "Must be at least 3 characters !")
        .max(20, "Must be maximum 20 characters !"),
      password: this.userToEdit.username
        ? yup.string().max(40, "Must be maximum 40 characters !")
        : yup
            .string()
            .required("Password is required !")
            .min(6, "Must be at least 6 characters !")
            .max(40, "Must be maximum 40 characters !"),
      email: yup
        .string()
        .required("Email is required !")
        .email("Email is invalid !")
        .max(50, "Must be maximum 50 characters !"),
      phone_number: yup
        .number()
        .max(2147000000, "The phone number is too big !")
        .min(0, "Phone number can't be negative !")
        .typeError("Phone number must be a number !")
        .required("Phone number is required !"),
      firstname: yup.string().required("Firstname is required !"),
      lastname: yup.string().required("Lastname is required !"),
      birthday: yup
        .date()
        .typeError("Birthday is incorrect !")
        .required("Birthday is required !"),
      birthplace: yup.string().required("Birth place is required !"),
    });

    return {
      successful: false,
      loading: false,
      message: "",
      schema,
      edit: false,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    isAdmin() {
      return this.$store.state.auth.user?.auth_level == 2;
    },
  },
  props: ["userToEdit"],
  mounted() {
    if (this.loggedIn) {
      if (this.userToEdit.username) {
        this.edit = true;

        M.updateTextFields();
      } else {
        this.$router.push("/tenants");
      }
    }
  },
  methods: {
    async handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      try {
        if (this.edit) {
          await UserService.update(user);
        } else {
          await this.$store.dispatch("auth/register", user);
        }

        this.$router.back();
      } catch (err) {
        this.message = this.edit ? "An error has occured !" : "Username already exists !";

        this.successful = false;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
</style>
