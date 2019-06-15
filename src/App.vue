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
import "./assets/js/jquery.min";
import "./assets/js/bootstrap.min";
import "./assets/js/lodash";

export default {
  components: {
    navbar: NavBar,
    footerapp: Footer
  }
};
</script>

<style lang="scss">
@import "./assets/css/bootstrap.min.css";

html,
body {
  background-color: $primary;
  overflow-x: hidden;
}

.container-fluid {
  margin: 0;
}
</style>
