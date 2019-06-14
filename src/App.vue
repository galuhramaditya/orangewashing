<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    navbar: NavBar
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
  padding: 0;
}
</style>
