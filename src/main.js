import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { OrderDaos } from "./dao"
import axios from "axios";
import "./assets/skeleton.css"


const axiosInstance = axios.create({
  baseURL: "http://0abe40d7.ngrok.io",
  timeout: 1000
});
Vue.config.productionTip = false;
Vue.prototype.$http = axiosInstance;
Vue.prototype.$ordersDao = new OrderDaos.OrderDao(axiosInstance);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
