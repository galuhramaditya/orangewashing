<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light top-jumbotron">
    <router-link class="navbar-brand" to="/">
      <img :src="require('@/assets/images/' + logo)">
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-for="menu in menus">
          <router-link :to="menu.link" class="nav-link">{{ menu.title }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      logo: "Image 3.png",
      menus: [
        {
          title: "Home",
          link: "/"
        },
        {
          title: "About Us",
          link: "/about"
        },
        {
          title: "Our Service",
          link: "/service"
        },
        {
          title: "Contact Us",
          link: "/contact"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed !important;
  z-index: 9;
  width: 100%;
  transition: 0.3s;
  box-shadow: 0px 0px 20px 0px $color-5;
}

.navbar .nav-link {
  text-align: center;
}

@media #{$md-min} {
  .top-jumbotron {
    box-shadow: 0px 0px;
    position: absolute !important;
    padding: 5%;
    background-color: transparent !important;
  }

  .top-jumbotron .navbar-nav {
    margin-left: 5%;
    width: 100%;
  }

  .top-jumbotron .navbar-nav .nav-item {
    margin: 0 3%;
    text-shadow: 0 1px 10px black;
  }

  .top-jumbotron .navbar-nav .nav-item:hover {
    text-shadow: 0 1px 5px black;
  }

  .top-jumbotron .navbar-nav .nav-link {
    color: $primary;
    padding: 0;
  }
}

@media #{$sm} {
  img {
    width: 75%;
  }
}

@media #{$xs} {
  img {
    width: 50%;
  }
}
</style>