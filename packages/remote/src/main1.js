import Vue from "vue";
import App from "./App.vue";
import { name, getName } from "./js/lib";
console.log({ name, getNameValue: getName("ty") });
new Vue({
  render: (h) => h(App),
}).$mount("#app");
