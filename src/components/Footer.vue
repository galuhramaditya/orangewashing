<template>
  <div class="footer container-fluid">
    <div class="row content">
      <div class="col-sm-4">
        <div class="head">ABOUT</div>
        <div class="body">
          Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr,
          sed diam nonumy eirmod
          tempor invidunt ut labore et
          dolore magna aliquyam erat,
        </div>
      </div>
      <div class="col-sm-4">
        <div class="head">SERVICES</div>
        <div class="body">
          <ul>
            <li>Detailing</li>
            <li>Engine</li>
            <li>Interior Dressing</li>
          </ul>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="head">CONTACT US</div>
        <div class="body">
          <ul>
            <li>
              <i class="fa fa-facebook-square"></i>
              <i class="fa fa-instagram"></i>
            </li>
            <li>
              <div class="map">
                <i class="fa fa-map-o"></i>
                <div>Jl. M.H Nasir No. 29 Cliodong, Depok. (Deket perumahan Cordova)</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row copyright">
      <div
        class="col-12 text-center"
      >Copyright©Orange washing & detailing, 2019. All rights reserved</div>
    </div>
  </div>
</template>

<style lang="scss">
.footer {
  border: solid 1px $color-9;
  background-color: $color-7;
  color: $primary;
}

.footer .content {
  padding: 5% 10% 1%;
}

.footer .content [class*="col-"] {
  padding: 5%;
}

.footer .head {
  font-family: Helvetica;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  margin-bottom: 3%;
  text-align: left;
}

@media screen and (min-width: 576px) {
  .footer .head {
    margin-bottom: 10%;
  }
}

.footer .body {
  font-family: Helvetica;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: left;
}

.footer .body ul {
  display: contents;
  list-style: none;
}

.footer .body ul li {
  margin-bottom: 10px;
}

.footer .body ul li .fa {
  font-size: 300%;
  margin-right: 15px;
}

.footer .body ul li .map .fa {
  position: absolute;
}

.footer .body ul li .map div {
  margin-left: 55px;
}

.footer .copyright {
  opacity: 0.6;
  font-family: Muli;
  font-size: $subtitle;
  margin-bottom: 3%;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: center;
  color: $color-8;
}
</style>

