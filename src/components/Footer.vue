<template>
  <div class="footer container-fluid">
    <div class="row content">
      <div class="col-sm-4">
        <div class="head text-sm">{{ left.head }}</div>
        <div class="body text-xs">{{left.body}}</div>
      </div>
      <div class="col-sm-4">
        <div class="head text-sm">{{ center.head }}</div>
        <div class="body text-xs">
          <ul>
            <li v-for="body in center.body">{{ body }}</li>
          </ul>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="head text-sm">{{ right.head }}</div>
        <div class="body text-xxs">
          <ul>
            <li>
              <i class="fa text-xl" v-for="top in right.body.top" :class="top"></i>
            </li>
            <li>
              <div class="map">
                <i class="fa text-xl" :class="right.body.bottom.logo"></i>
                <div>{{ right.body.bottom.content }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row copyright">
      <div class="col-12 text-center text-xs">{{ copyright }}</div>
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
  font-weight: bold;
  margin-bottom: 3%;
}

@media ($sm-min) {
  .footer .head {
    margin-bottom: 7%;
  }
}

.footer .body {
  font-family: Helvetica;
  line-height: 1.21;
}

.footer .body ul {
  display: contents;
  list-style: none;
}

.footer .body ul li {
  margin-bottom: 10px;
}

.footer .body ul li .fa {
  margin-right: 15px;
}

.footer .body ul li .map .fa {
  position: absolute;
}

.footer .body ul li .map div {
  margin-left: 50px;
}

@media ($sm-max) {
  .footer .body ul li .map div {
    margin-left: 40px;
  }
}

.footer .copyright {
  opacity: 0.6;
  font-family: Muli;
  margin-bottom: 3%;
  color: $color-8;
}
</style>

