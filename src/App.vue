<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import "./assets/js/jquery.min";
import "./assets/js/bootstrap.min";
import "./assets/js/lodash";
// import "./assets/js/jquery.nicescroll";

export default {
  components: {
    navbar: NavBar
  }
};
</script>

<style lang="scss">
@import "./assets/css/bootstrap.min.css";

html,
body {
  background-color: $primary;
}

html,
body,
#app {
  height: 100%;
}

.container-fluid {
  padding: 0;
  width: 100%;
}

.row {
  width: 100%;
  margin: 0;
}
</style>
