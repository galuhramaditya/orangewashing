<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <footerapp/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    navbar: NavBar,
    footerapp: Footer
  }
};
</script>

<style lang="scss">
@import "./assets/css/bootstrap.min.css";
@import "./assets/scss/color.scss";

html,
body {
  background-color: $primary;
}

.container-fluid {
  margin: 0;
}
</style>
