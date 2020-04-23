import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from './store'

Vue.config.productionTip = false;

Vue.filter('truncate', function (value, limit) {
  if (value.length > limit) {
      value = value.substring(0, (limit - 3)) + '...';
  }

  return value
})

new Vue({
  vuetify,
  store,
  render: h => h(App),
}).$mount("#app");
