import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/hyeon",
    component: () => import("@/views/Hyeon.vue")
  },
  {
    path: "/yeon",
    component: () => import("@/views/Yeon.vue")
  },
  {
    path: "/mail",
    component: () => import("@/views/Mail.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
