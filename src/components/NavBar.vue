<template>
  <nav class="navbar navbar-expand-md navbar-dark top-jumbotron">
    <a class="navbar-brand" href="/">
      <img src="../assets/images/Image 3.png">
    </a>
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
        <li class="nav-item active">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About Us</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/service" class="nav-link">Our Service</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contact Us</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  position: fixed;
  z-index: 99999999;
  width: 100%;
}

.navbar .nav-link {
  text-align: center;
}

.navbar.top-jumbotron {
  position: absolute;
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
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.19;
  letter-spacing: normal;
  opacity: 0.9;
  color: $primary !important;
}

.navbar.top-jumbotron .active {
  opacity: 1;
  font-weight: 600;
}

.navbar.top-jumbotron .navbar-brand {
  margin-right: 5%;
}

.navbar.top-jumbotron button {
  color: $primary;
}
</style>