import Vue from "vue";
import VueRouter from "vue-router";
import Orders from "../views/Orders";
import NewOrder from "../views/NewOrder";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Orders",
    component: Orders
  },
  {
    path: "/new",
    name: "New Order",
    component: NewOrder
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
