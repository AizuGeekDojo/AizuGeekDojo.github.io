import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import VueAnalytics from "vue-analytics";

Vue.config.productionTip = false;

// new Vue(VueAnalytics, {
//   id: "UA-129319152-1",
//   router,
//   render: h => h(App)
// }).$mount("#app");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
