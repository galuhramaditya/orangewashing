<template>
  <BaseLayout>
    <div class="container-fluid widget-jumbotron">
      <div class="row">
        <div class="col-md-12">
          <Jumbotron/>
        </div>
      </div>
    </div>
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
      <div class="container">
        <div class="row">
          <div class="col-12 widget-card">
            <ExploreService/>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 widget-last-update">
          <GetLastUpdate/>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script scoped>
import DetailingService from "@/components/DetailingService.vue";
import DetailingServiceImage from "@/components/DetailingService-Image.vue";
import OrangeWashingDetailing from "@/components/OrangeWashingDetailing.vue";
import OrangeWashingDetailingImage from "@/components/OrangeWashingDetailing-Image.vue";
import ExploreService from "@/components/ExploreService.vue";
import GetLastUpdate from "@/components/GetLastUpdate.vue";
import Jumbotron from "@/components/Jumbotron.vue";
import BaseLayout from "@/layouts/Base.vue";

export default {
  components: {
    BaseLayout,
    Jumbotron,
    DetailingServiceImage,
    DetailingService,
    OrangeWashingDetailing,
    OrangeWashingDetailingImage,
    ExploreService,
    GetLastUpdate
  }
};

$(document).scroll(function() {
  if ($("html, body").scrollTop() > $(".widget-jumbotron").height() - 50) {
    $(".navbar").addClass("bg-light");
    $(".navbar").addClass("navbar-light");
    $(".navbar").removeClass("navbar-dark");
    $(".navbar").removeClass("top-jumbotron");
  } else {
    $(".navbar").removeClass("navbar-light");
    $(".navbar").removeClass("bg-light");
    $(".navbar").addClass("navbar-dark");
    $(".navbar").addClass("top-jumbotron");
  }
});

$(document).ready(function() {
  var blur = true;
  $(".navbar.top-jumbotron button").click(function() {
    blur = !blur;
    if (!blur) {
      $(".container").addClass("blur");
    } else {
      $(".container").removeClass("blur");
    }
  });
});
</script>

<style lang="scss" scoped>
@media screen and (max-width: 767px) {
  .container [class*="widget-"] {
    padding-top: 10%;
  }
}

@media screen and (min-width: 768px) {
  .widget-top-right {
    padding-left: 5%;
  }

  .widget-top-right {
    padding-bottom: 5%;
  }

  .widget-bottom-left {
    padding-top: 15%;
  }
}

.widget-jumbotron {
  padding-bottom: 5%;
}

.widget-jumbotron > .row {
  margin: 0;
  width: 100%;
}

.widget-jumbotron > .row > [class*="col-"] {
  padding: 0;
}

.widget-card {
  padding-top: 10%;
}

.widget-last-update {
  padding: 10% 0;
}
</style>
