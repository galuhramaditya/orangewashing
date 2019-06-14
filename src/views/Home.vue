<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <OrangeWashingDetailingImage/>
        </div>
        <div class="col-6">
          <OrangeWashingDetailing/>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <DetailingService/>
        </div>
        <div class="col-6">
          <DetailingServiceImage/>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
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
