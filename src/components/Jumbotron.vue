<template>
  <div class="jumbotron jumbotron-header">
    <div class="container">
      <h1 class="title">
        WE LOVE YOUR CAR
        THE SAME AS YOU DO
      </h1>
      <button class="btn btn-secondary">Contact Us Now</button>
    </div>
  </div>
</template>

<style lang="scss">
.jumbotron-header {
  vertical-align: middle;
  text-align: center;
  padding: 20% 0 10%;
  background: url(../assets/images/jumbotron.png);
  background-attachment: fixed;
  border-radius: 0;
}

.jumbotron-header .title {
  padding-bottom: 3%;
  font-family: Montserrat;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.18;
  letter-spacing: normal;
  text-align: center;
  color: $primary;
  font-size: 200%;
}

.jumbotron-header .btn {
  padding: 1% 5%;
  border-radius: 20px;
  border: solid 2px $primary;
  background-color: transparent;
}

@media screen and (min-width: 768px) {
  .jumbotron-header .title {
    padding-left: 20%;
    padding-right: 20%;
    font-size: 250%;
  }
}
</style>
