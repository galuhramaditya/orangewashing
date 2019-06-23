<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import "./assets/js/jquery.min";
import "./assets/js/bootstrap.min";
import "./assets/js/lodash";
import "./assets/js/jquery.nicescroll.min";

export default {};

// $("body").niceScroll({
//   cursorcolor: "#f26e22",
//   cursorborder: "transparent"
// });
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

.blur {
  filter: blur(5px);
}
</style>
