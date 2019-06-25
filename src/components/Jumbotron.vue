<template>
  <div class="jumbotron text-center">
    <table class="container">
      <tr>
        <td>
          <h1 class="title text-xxl">{{ caption }}</h1>
          <button class="btn btn-outline-secondary">{{ button }}</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      caption: "WE LOVE YOUR CAR THE SAME AS YOU DO",
      button: "Contact Us Now"
    };
  }
};
</script>


<style lang="scss" scoped>
.jumbotron {
  padding-top: 100px;
  vertical-align: middle;
  height: 500px;
  background: url(../assets/images/jumbotron.png);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  border-radius: 0;
  transition: 0.3s;
}

.container {
  height: 100%;
}

.title {
  padding-bottom: 3%;
  font-family: Montserrat;
  font-weight: 600;
  color: $primary;
}

.btn {
  padding: 1% 4%;
  border-radius: 20px;
}

@media #{$md-min} {
  .jumbotron {
    height: 700px;
  }
  .title {
    padding-left: 20%;
    padding-right: 20%;
  }
}
</style>
