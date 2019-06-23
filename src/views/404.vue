<template>
  <div class="page">
    <navbar/>
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-md-6 right">
            <img :src="require('@/assets/images/' + image)" alt="404">
          </div>
          <div class="col-md-6 order-md-first left">
            <div class="title">{{ title }}</div>
            <div class="subtitle">{{ subtitle }}</div>
            <router-link to="/" class="btn btn-secondary">{{ button }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    navbar: NavBar
  },
  data() {
    return {
      image: "Group 479.png",
      title: "Oops !",
      subtitle: "We could not find the page you were looking for",
      button: "Go Back Home"
    };
  }
};

$(document).ready(function() {
  var blur = true;
  $(".navbar.top-jumbotron button").click(function() {
    blur = !blur;
    if (!blur) {
      $(".container-fluid").addClass("blur");
    } else {
      $(".container-fluid").removeClass("blur");
    }
  });
});
</script>

<style lang="scss" scoped>
.container-fluid {
  background-color: $color-7;
  text-align: left !important;
  padding-top: 13%;
  padding-bottom: 10%;
  height: 100%;
  border-radius: 0;
  transition: 0.3s;
}

.container-fluid img {
  width: 100%;
}

.container-fluid .left {
  padding-top: 5%;
}

.container-fluid.blur {
  filter: blur(5px);
}

.container-fluid .title {
  padding-bottom: 5%;
  font-family: Montserrat;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.18;
  letter-spacing: normal;
  color: $primary;
  font-size: 200%;
}

.container-fluid .subtitle {
  font-family: Georgia;
  font-size: 25px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.28;
  letter-spacing: normal;
  color: $primary;
}

.container-fluid .btn {
  margin: 10% 0;
  padding: 3% 7%;
  border: 0;
  background-color: $color-4;
}

@media screen and (min-width: 768px) {
  .container-fluid .title {
    font-size: 50px;
  }
}

@media screen and (max-width: 767px) {
  .container-fluid .row {
    text-align: center;
  }

  .container-fluid .btn {
    margin: 8% 0;
  }

  .container-fluid img {
    padding-top: 15%;
    width: 80%;
  }

  .container-fluid .title {
    padding-bottom: 2%;
    font-size: 40px;
  }

  .container-fluid .subtitle {
    font-size: 15px;
  }
}
</style>
