import Vue from "vue";
import VueRouter from "vue-router";

// Components
import Home from "../views/Dashboard.vue";
import Colors from "../views/Colors.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/colors",
    name: "Colors",
    component: Colors
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
