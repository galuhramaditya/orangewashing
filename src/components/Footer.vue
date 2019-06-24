<template>
  <div class="footer container-fluid">
    <div class="row content">
      <div class="col-sm-4">
        <div class="head">{{ left.head }}</div>
        <div class="body">{{left.body}}</div>
      </div>
      <div class="col-sm-4">
        <div class="head">{{ center.head }}</div>
        <div class="body">
          <ul>
            <li v-for="body in center.body">{{ body }}</li>
          </ul>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="head">{{ right.head }}</div>
        <div class="body">
          <ul>
            <li>
              <i class="fa" v-for="top in right.body.top" :class="top"></i>
            </li>
            <li>
              <div class="map">
                <i class="fa" :class="right.body.bottom.logo"></i>
                <div>{{ right.body.bottom.content }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row copyright">
      <div class="col-12 text-center">{{ copyright }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      left: {
        head: "ABOUT",
        body:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,"
      },
      center: {
        head: "SERVICES",
        body: ["Detailing", "Engine", "Interior Dressing"]
      },
      right: {
        head: "CONTACT US",
        body: {
          top: ["fa-facebook-square", "fa-instagram"],
          bottom: {
            logo: "fa-map-o",
            content:
              "Jl. M.H Nasir No. 29 Cliodong, Depok. (Deket perumahan Cordova)"
          }
        }
      },
      copyright:
        "Copyright©Orange washing & detailing, 2019. All rights reserved"
    };
  }
};
</script>


<style lang="scss" scoped>
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

@media ($sm-min) {
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

