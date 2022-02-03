<template>
  <div id="app">
    <Header />
    <Login />
    <!-- <router-view/> -->
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Login from "./components/Login.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Login,
    Footer,
  },
};
</script>

<style>
body {
  background: #333;
}
</style>
