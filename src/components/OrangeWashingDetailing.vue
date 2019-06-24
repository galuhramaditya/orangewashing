<template>
  <div class="row">
    <div class="head text-navy text-xl">{{ head }}</div>
    <div class="body text-darkgrey text-sm">{{ body }}</div>
    <div class="button text-center">
      <button class="btn btn-primary">{{button}}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      head: "Who Is Orange Washing & Detailing",
      body:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,",
      button: "Know More About Us"
    };
  }
};
</script>


<style lang="scss" scoped>
.head {
  font-family: Georgia;
  font-weight: bold;
  line-height: 1.28;
}

.body {
  font-family: Helvetica;
  margin: 4% 0;
}

@media ($sm-max) {
  .row {
    text-align: justify !important;
  }
}

@media ($md-min) {
  .button {
    text-align: left !important;
  }
}
</style>
