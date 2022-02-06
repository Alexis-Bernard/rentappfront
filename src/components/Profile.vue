<template>
  <div class="card grey lighten-4">
    <div class="card-content">
      <h3>
        <strong>{{ currentUser.username }}</strong> Profile
      </h3>
      <p>
        <strong>Firstname:</strong>
        {{ currentUser.firstname }}
      </p>
      <p>
        <strong>Lastname:</strong>
        {{ currentUser.lastname }}
      </p>
      <p>
        <strong>Birthday:</strong>
        {{ currentUser.birthday }}
      </p>
      <p>
        <strong>Birthplace:</strong>
        {{ currentUser.birthplace }}
      </p>
      <p>
        <strong>Phone number:</strong>
        {{ currentUser.phone_number }}
      </p>
      <p>
        <strong>Email:</strong>
        {{ currentUser.email }}
      </p>
      <p>
        <strong>Authorities:</strong>
        {{ auth_level }}
      </p>

      <button class="waves-effect waves-light btn" @click="editProfile">
        Edit profile
      </button>
    </div>
  </div>
</template>

<script>
import UserService from "../services/account.service";

export default {
  name: "Profile",
  data() {
    return {
      currentUser: {},
    };
  },
  computed: {
    auth_level() {
      if (this.currentUser.auth_level == 0) {
        return "Tenant";
      } else if (this.currentUser.auth_level == 1) {
        return "Owner";
      } else if (this.currentUser.auth_level == 2) {
        return "Admin";
      } else {
        return "";
      }
    },
  },
  async beforeCreate() {
    if (!this.$store.state.auth.user) {
      this.$router.push("/");
    } else {
      try {
        this.currentUser = await UserService.getOne(
          this.$store.state.auth.user.username
        );

        let temp_user = this.$store.state.auth.user
        temp_user.auth_level = this.currentUser.auth_level

        localStorage.setItem("user", JSON.stringify(temp_user));
      } catch {
        this.$store.dispatch("auth/logout");
        this.$router.push("/");
      }
    }
  },
  methods: {
    editProfile() {
      this.$router.push({
        name: "editProfile", // /profile/edit
        params: this.currentUser,
      });
    },
  },
};
</script>