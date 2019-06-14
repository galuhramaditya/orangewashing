<template>
  <div class="exploreService">
    <div class="row">
      <div class="col-12">
        <div class="head">Explore Our Services</div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div
          class="body"
        >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-md-4 col-card" v-for="card in cards">
        <div class="card">
          <img class="card-img-top" :src="'/img/' + card.image" alt="Card image cap">
          <div class="card-body">
            <div class="card-title">{{card.title}}</div>
            <div class="card-text">{{card.subtitle}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <button class="btn btn-secondary">Explore More</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          image: "eaters-collective-172257-unsplash.png",
          title: "Detailing",
          subtitle: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,"
        },
        {
          image: "aiu45f8t.png",
          title: "Interior Dressing",
          subtitle: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,"
        },
        {
          image: "7es93lms.png",
          title: "Snow Wash",
          subtitle: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,"
        },
        {
          image: "suts9k7v.png",
          title: "Ham Sandwich",
          subtitle: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,"
        },
        {
          image: "p9eh9haz.png",
          title: "Engine",
          subtitle: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,"
        },
        {
          image: "aiu45f8t.png",
          title: "Ham Sandwich",
          subtitle: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,"
        }
      ]
    };
  }
};
</script>


<style lang="scss">
@import "../assets/scss/color.scss";

.exploreService .head {
  font-family: "Montserrat";
  font-size: 36px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.28;
  letter-spacing: normal;
  text-align: center;
  color: $color-3;
}

.exploreService .body {
  padding: 0 15% 5%;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: center;
  color: $color-2;
}

.exploreService .btn-secondary {
  background-color: $color-4;
  border-color: transparent;
  box-shadow: 0 15px 29px 0 rgba(242, 110, 34, 0.35);
}

.exploreService .col-card {
  margin-bottom: 53.4px;
}

.exploreService .card {
  border-radius: 13px;
  border-color: transparent;
  box-shadow: 0 17px 16px 0 rgba(235, 241, 245, 0.55);
}

.exploreService .card img {
  object-fit: contain;
}

.exploreService .card .card-title {
  font-family: Georgia;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  color: $color-3;
}

.exploreService .card .card-text {
  font-family: Helvetica;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  color: $color-2;
}
</style>
