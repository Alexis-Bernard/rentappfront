<template>
  <div v-if="currentUser">
    <router-link
      v-if="showAdminBoard"
      class="waves-effect waves-light btn"
      to="/admin"
    >
      Admin panel
    </router-link>

    <router-link class="waves-effect waves-light btn" to="/profile">
      {{ currentUser.username }}
    </router-link>

    <!-- <router-link class="waves-effect waves-light btn" to="/tenants">
      My tenants
    </router-link> -->

    <a @click.prevent="logOut" class="waves-effect waves-light btn">
      <span>Logout</span>
    </a>
  </div>

  <div v-else>
    <router-link class="waves-effect waves-light btn" to="/">
      Login
    </router-link>

    <router-link class="waves-effect waves-light btn" to="/register">
      Register
    </router-link>
  </div>

  <!-- Page content -->
  <div class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      return this.$store.state.auth.user.auth_level == 2
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/");
    },
  },
};
</script>

<style>
body {
  background: #aaa;
}
</style>
