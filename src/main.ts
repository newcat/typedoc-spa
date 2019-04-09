import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ScrollFix from "./scrollfix";
import "./elementUi";
import "./fontAwesome";
import "normalize.css/normalize.css";
import "./styles.scss";

Vue.config.productionTip = false;

new Vue({
  mixins: [ScrollFix],
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
