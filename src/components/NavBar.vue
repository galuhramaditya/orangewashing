<template>
  <nav class="navbar navbar-expand-md navbar-dark top-jumbotron">
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

.navbar.top-jumbotron {
  box-shadow: 0px 0px;
  position: absolute !important;
  padding: 5%;
}

.navbar.top-jumbotron .navbar-nav {
  width: 100%;
}

.navbar.top-jumbotron .nav-item {
  margin: 0 3%;
}
.navbar.top-jumbotron .nav-link {
  font-family: Montserrat;
  text-shadow: 0px 1px 5px $color-5;
  font-weight: 600;
  opacity: 0.75;
  transition: 0.3s;
  color: $primary !important;
}

.navbar.top-jumbotron .active {
  opacity: 1;
  font-weight: 900;
}

.navbar.top-jumbotron .navbar-brand {
  margin-right: 5%;
}

.navbar.top-jumbotron button.collapsed {
  box-shadow: 0px 0px 1px 1px $color-5;
}

.navbar.top-jumbotron button {
  box-shadow: 0px 0px 1px 5px $color-5;
}

.navbar.top-jumbotron .show .nav-link {
  text-shadow: 3px 3px 3px $color-5;
}

@media ($sm-max) {
  img {
    width: 75%;
  }
}
</style>