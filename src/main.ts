import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ScrollFix from "./scrollfix";

import ElementUI from "element-ui";
Vue.use(ElementUI);

import "beardcss/dist/beard.css";
import "./styles.css";

Vue.config.productionTip = false;

new Vue({
  mixins: [ScrollFix],
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
