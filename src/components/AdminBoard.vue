<template>
  <div class="card grey lighten-4">
    <div class="card-content">
      <ul class="collection with-header">
        <li class="collection-header"><h4>Accounts</h4></li>

        <li
          class="collection-item"
          v-for="account in accounts"
          :key="account.id"
        >
          <div>
            <button
              class="waves-effect waves-light btn"
              @click="editProfile(account)"
            >
              edit
            </button>

            {{ account.lastname }} {{ account.firstname }} ({{
              account.username
            }})
          </div>
        </li>
      </ul>

      <h3>{{ message }}</h3>
    </div>
  </div>
</template>

<script>
import UserService from "../services/account.service";

export default {
  name: "Admin",
  data() {
    return {
      accounts: [],
      message: "",
    };
  },
  beforeCreate() {
    if (this.$store.state.auth.user.auth_level != 2) {
      this.$router.push("/");
    }
  },
  async mounted() {
    try {
      let res = await UserService.getAll();

      this.accounts = res;
    } catch {
      this.message = "An error has occured";
    }
  },
  methods: {
    editProfile(account) {
      this.$router.push({
        name: "editProfile", // /profile/edit
        params: account,
      });
    },
  },
};
</script>
