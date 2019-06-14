import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./assets/js/jquery.min.js";
import "./assets/js/bootstrap.min.js";
// import "./assets/js/popper.min.js";
import "./assets/js/lodash.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
