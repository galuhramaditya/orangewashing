<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-md-6 widget-top-left">
          <OrangeWashingDetailingImage/>
        </div>
        <div class="col-md-6 widget-top-right">
          <OrangeWashingDetailing/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 widget-bottom-right">
          <DetailingServiceImage/>
        </div>
        <div class="col-md-6 widget-bottom-left order-md-first">
          <DetailingService/>
        </div>
      </div>
      <div class="row">
        <div class="col-12 widget-card">
          <ExploreService/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DetailingService from "@/components/DetailingService.vue";
import DetailingServiceImage from "@/components/DetailingService-Image.vue";
import OrangeWashingDetailing from "@/components/OrangeWashingDetailing.vue";
import OrangeWashingDetailingImage from "@/components/OrangeWashingDetailing-Image.vue";
import ExploreService from "@/components/ExploreService.vue";

export default {
  name: "home",
  components: {
    DetailingServiceImage,
    DetailingService,
    OrangeWashingDetailing,
    OrangeWashingDetailingImage,
    ExploreService
  }
};
</script>

<style lang="scss">
@media screen and (max-width: 767px) {
  [class*="widget-"] {
    padding-top: 10%;
  }
}

@media screen and (min-width: 768px) {
  .home .widget-top-right {
    padding-left: 5%;
  }

  .home .widget-top-right {
    padding-bottom: 5%;
  }

  .home .widget-bottom-left {
    padding-top: 15%;
  }
}

.home .widget-card {
  padding-top: 10%;
}
</style>
