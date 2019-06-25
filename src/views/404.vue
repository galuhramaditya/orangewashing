<template>
  <div class="page">
    <navbar/>
    <div class="container-fluid">
      <table class="container align-middle">
        <tr>
          <td>
            <div class="row">
              <div class="col-md-6 right">
                <table>
                  <tr>
                    <td>
                      <img :src="require('@/assets/images/' + image)" alt="404">
                    </td>
                  </tr>
                </table>
              </div>
              <div class="col-md-6 order-md-first left text-white">
                <table>
                  <tr>
                    <td>
                      <div class="title text-xxl text-xxl">{{ title }}</div>
                      <div class="subtitle text-md">{{ subtitle }}</div>
                      <router-link to="/" class="btn btn-primary btn-lg">{{ button }}</router-link>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </td>
        </tr>
      </table>
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
</script>

<style lang="scss" scoped>
.page {
  height: 100%;
}

.container-fluid {
  background-color: $color-7;
  text-align: left !important;
  height: 100%;
  border-radius: 0;
  padding: 10% 0;
  transition: 0.3s;
}

table {
  height: 100%;
  width: 100%;
}

.container .row {
  height: 100%;
}

.container-fluid img {
  width: 100%;
}

@media #{$md-min} {
  .container-fluid .left {
    padding-top: 5%;
  }
}

.container-fluid .title {
  font-family: Montserrat;
  font-weight: 600;
}

.container-fluid .subtitle {
  font-family: Georgia;
  font-weight: bold;
  margin: 5% 0;
}

@media #{$sm-max} {
  .container-fluid .row {
    text-align: center;
  }

  .container-fluid img {
    padding-top: 15%;
    width: 80%;
  }

  .container-fluid .title {
    padding: 5% 0;
  }
}
</style>
