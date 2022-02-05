<template>
  <router-link v-if="showAdminBoard" to="/admin"> Admin Board </router-link>

  <router-link v-if="currentUser" to="/profile"> User </router-link>

  <router-link to="/"> Login </router-link>

  <router-link v-if="!currentUser" to="/register"> Register </router-link>

  <div v-if="currentUser">
    <router-link to="/profile">
      {{ currentUser.username }}
    </router-link>

    <a @click.prevent="logOut">
      <span>Logout</span>
    </a>
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
      if (this.currentUser && this.currentUser["auth_level"]) {
        return this.currentUser["auth_level"] == 2;
      }

      return false;
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
