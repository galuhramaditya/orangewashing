<template>
  <div class="row">
    <div class="head text-xl">{{ head }}</div>
    <div class="body text-sm">{{ body }}</div>
    <div class="button text-center">
      <button class="btn btn-secondary">{{button}}</button>
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
  color: $color-3;
}

.body {
  font-family: Helvetica;
  line-height: 1.63;
  color: $color-1;
}

.btn-secondary {
  background-color: $color-4;
  border-color: transparent;
  margin-top: 4%;
  box-shadow: 0 15px 29px 0 rgba(242, 110, 34, 0.35);
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
