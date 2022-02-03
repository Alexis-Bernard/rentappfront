<template>
  <div class="container">
    <div class="card">
      <div class="card-content grey lighten-4">
        <div id="login">
          <h2>Login</h2>

          <div class="input-field">
            <input
              id="login_username"
              v-model="login_username"
              type="text"
              class="validate"
            />
            <label for="login_username">Username</label>
          </div>

          <div class="input-field">
            <input
              id="login_password"
              v-model="login_password"
              type="password"
              class="validate"
            />
            <label for="login_password">Password</label>
          </div>

          <a class="waves-effect waves-light btn" @click="login">Sign in</a>
        </div>

        <div id="register">
          <h2>Register</h2>

          <div class="input-field">
            <input
              id="register_username"
              v-model="register_username"
              type="text"
              class="validate"
            />
            <label for="register_username">Username</label>
          </div>

          <div class="input-field">
            <input
              id="register_password"
              v-model="register_password"
              type="password"
              class="validate"
            />
            <label for="register_password">Password</label>
          </div>

          <div class="input-field">
            <input
              id="register_email"
              v-model="register_email"
              type="text"
              class="validate"
            />
            <label for="register_email">Email</label>
          </div>

          <div class="input-field">
            <input
              id="register_firstname"
              v-model="register_firstname"
              type="text"
              class="validate"
            />
            <label for="register_firstname">Firstname</label>
          </div>

          <div class="input-field">
            <input
              id="register_lastname"
              v-model="register_lastname"
              type="text"
              class="validate"
            />
            <label for="register_lastname">Lastname</label>
          </div>

          <div class="input-field">
            <input
              id="register_birthday"
              v-model="register_birthday"
              type="text"
              class="validate"
            />
            <label for="register_birthday">birthday</label>
          </div>

          <div class="input-field">
            <input
              id="register_birthplace"
              v-model="register_birthplace"
              type="text"
              class="validate"
            />
            <label for="register_birthplace">Birth place</label>
          </div>

          <div class="input-field">
            <input
              id="register_phone_number"
              v-model="register_phone_number"
              type="number"
              class="validate"
            />
            <label for="register_phone_number">phone number</label>
          </div>

          <a class="waves-effect waves-light btn" @click="register">Sign up</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login_username: "",
      login_password: "",

      register_username: "",
      register_password: "",
      register_email: "",
      register_firstname: "",
      register_lastname: "",
      register_birthday: "",
      register_birthplace: "",
      register_phone_number: "",
    };
  },
  methods: {
    async login() {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.login_username,
          password: this.login_password,
        }),
      };

      let res = await fetch(process.env.VUE_APP_API_LOGIN, requestOptions);

      if (res.status == 200) {
        alert("Created !");
      }
    },
    async register() {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.register_username,
          password: this.register_password,
          firstname: this.register_firstname,
          lastname: this.register_lastname,
          birthday: this.register_birthday,
          birthplace: this.register_birthplace,
          phone_number: this.register_phone_number,
          email: this.register_email,
        }),
      };

      let res = await fetch(process.env.VUE_APP_API_ACCOUNTS, requestOptions);

      if (res.status == 201) {
        alert("Created !");
      }
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
