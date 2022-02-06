<template>
  <div>
    TENANTS LIST
  </div>
</template>

<script>
export default {
  name: "Tenants",
  beforeCreate() {
    if (!this.$store.state.auth.user) {
      this.$router.push("/");
    }
  },
};
</script>