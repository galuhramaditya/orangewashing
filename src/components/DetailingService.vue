<template>
  <div class="row">
    <div class="head text-navy text-xl">{{ head }}</div>
    <div class="body text-darkgrey text-sm">{{ body }}</div>
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
}

.body {
  font-family: Helvetica;
  margin: 4% 0;
}

@media #{$sm-max} {
  .body {
    text-align: justify !important;
  }
}
</style>
