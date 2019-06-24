<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 text-center">
        <div class="head text-xl">{{ head }}</div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <div class="body text-sm">{{ body }}</div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-md-4 col-card" v-for="card in cards">
        <div class="card">
          <img
            class="card-img-top"
            :src="require('@/assets/images/' + card.image)"
            alt="Card image cap"
          >
          <div class="card-body">
            <div class="card-title text-md">{{ card.title }}</div>
            <div class="card-text text-xs">{{ card.subtitle }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <button class="btn btn-secondary">{{ more }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      head: "Explore Our Services",
      body:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
      more: "Explore More",
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


<style lang="scss" scoped>
.head {
  font-family: "Montserrat";
  font-weight: bold;
  line-height: 1.28;
  color: $color-3;
}

.body {
  padding: 0 25% 5%;
  font-family: Helvetica;
  color: $color-2;
}

.btn-secondary {
  background-color: $color-4;
  border-color: transparent;
  box-shadow: 0 15px 29px 0 rgba(242, 110, 34, 0.35);
}

.col-card {
  margin-bottom: 53.4px;
}

.card {
  border-radius: 13px;
  border-color: transparent;
  box-shadow: 0 17px 16px 0 rgba(235, 241, 245, 0.55);
}

.card .card-title {
  font-family: Georgia;
  font-weight: bold;
  color: $color-3;
}

.card .card-text {
  font-family: Helvetica;
  color: $color-2;
}
</style>
