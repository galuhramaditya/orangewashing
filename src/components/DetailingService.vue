<template>
  <div class="row text-left">
    <div class="head text-xl">{{ head }}</div>
    <div class="body text-sm">{{ body }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      head: "Detailing Services With A Personal Touch",
      body:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,"
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

@media ($sm-max) {
  .row {
    text-align: justify !important;
  }
}
</style>
