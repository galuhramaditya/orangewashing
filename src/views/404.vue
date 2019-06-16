<template>
  <div class="page_404">
    <div class="container">
      <div class="row">
        <div class="col-md-6 right">
          <img src="../assets/images/Group 479.png" alt="404">
        </div>
        <div class="col-md-6 order-md-first left">
          <div class="title">Oops !</div>
          <div class="subtitle">We could not find the page you were looking for</div>
          <button class="btn btn-secondary">Go Back Home</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
$(document).ready(function() {
  var blur = true;
  $(".navbar.top-jumbotron button").click(function() {
    blur = !blur;
    if (!blur) {
      $(".page_404").addClass("blur");
    } else {
      $(".page_404").removeClass("blur");
    }
  });
});
</script>

<style lang="scss" scoped>
.page_404 {
  background-color: $color-7;
  text-align: left !important;
  padding-top: 13%;
  padding-bottom: 10%;
  height: 100%;
  border-radius: 0;
  transition: 0.3s;
}

.page_404 img {
  width: 100%;
}

.page_404 .left {
  padding-top: 5%;
}

.page_404.blur {
  filter: blur(5px);
}

.page_404 .title {
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

.page_404 .subtitle {
  font-family: Georgia;
  font-size: 25px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.28;
  letter-spacing: normal;
  color: $primary;
}

.page_404 .btn {
  margin: 10% 0;
  padding: 3% 7%;
  border: 0;
  background-color: $color-4;
}

@media screen and (min-width: 768px) {
  .page_404 .title {
    font-size: 50px;
  }
}

@media screen and (max-width: 767px) {
  .page_404 .row {
    text-align: center;
  }

  .page_404 .btn {
    margin: 8% 0;
  }

  .page_404 img {
    padding-top: 15%;
    width: 80%;
  }

  .page_404 .title {
    padding-bottom: 2%;
    font-size: 40px;
  }

  .page_404 .subtitle {
    font-size: 15px;
  }
}
</style>
