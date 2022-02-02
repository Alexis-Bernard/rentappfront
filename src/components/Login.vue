<template>
    <div class="container">
        <div class="card">
            <div class="card-content grey lighten-4">
                <div id="login">
                    <h2>Login</h2>

                    <div class="input-field">
                        <input id="login_username" type="text" class="validate">
                        <label for="login_username">Username</label>
                    </div>

                    <div class="input-field">
                        <input id="login_password" type="password" class="validate">
                        <label for="login_password">Password</label>
                    </div>

                    <a class="waves-effect waves-light btn" onclick="login()">Sign in</a>
                </div>

                <div id="register">
                    <h2>Register</h2>

                    <div class="input-field">
                        <input id="register_username" type="text" class="validate">
                        <label for="register_username">Username</label>
                    </div>

                    <div class="input-field">
                        <input id="register_password" type="password" class="validate">
                        <label for="register_password">Password</label>
                    </div>

                    <div class="input-field">
                        <input id="register_email" type="text" class="validate">
                        <label for="register_email">Email</label>
                    </div>

                    <div class="input-field">
                        <input id="register_firstname" type="text" class="validate">
                        <label for="register_firstname">Firstname</label>
                    </div>

                    <div class="input-field">
                        <input id="register_lastname" type="text" class="validate">
                        <label for="register_lastname">Lastname</label>
                    </div>

                    <div class="input-field">
                        <input id="register_birthday" type="text" class="validate">
                        <label for="register_birthday">birthday</label>
                    </div>

                    <div class="input-field">
                        <input id="register_birthplace" type="text" class="validate">
                        <label for="register_birthplace">Birth place</label>
                    </div>

                    <div class="input-field">
                        <input id="register_phone_number" type="number" class="validate">
                        <label for="register_phone_number">phone number</label>
                    </div>

                    <a class="waves-effect waves-light btn" onclick="register()">Sign up</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// async function login() {
//   console.log("Login");
// }

// async function register() {
//   const requestOptions = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       username: document.getElementById("register_username").value,
//       password: document.getElementById("register_password").value,
//       firstname: document.getElementById("register_firstname").value,
//       lastname: document.getElementById("register_lastname").value,
//       birthday: document.getElementById("register_birthday").value,
//       birthplace: document.getElementById("register_birthplace").value,
//       phone_number: document.getElementById("register_phone_number").value,
//       email: document.getElementById("register_email").value,
//     }),
//   };

//   let res = await fetch(api_accounts, requestOptions);

//   if (res.status == 201) {
//     alert("Created !");
//   }
// }

export default {
  name: "Login",
  props: {
    msg: String,
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
