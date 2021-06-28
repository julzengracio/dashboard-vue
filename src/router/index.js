import Vue from "vue";
import VueRouter from "vue-router";

// Components
import Home from "../views/Dashboard.vue";
import Colors from "../views/Colors.vue";
import Typography from "../views/Typography.vue";
import Buttons from "../views/Buttons.vue";

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
  },
  {
    path: "/typography",
    name: "Typography",
    component: Typography
  },
  {
    path: "/buttons",
    name: "Buttons",
    component: Buttons
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
