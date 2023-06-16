import { createRouter, createWebHistory } from "vue-router";
import LandingComponent from "../views/Landing.vue";
import SigninComponent from "../views/Auth/Signin.vue";
import SignupComponent from "../views/Auth/Signup.vue";
import SignupComponent2 from "../views/Auth/Signup2.vue";
import SignupComponent3 from "../views/Auth/Signup3.vue";
import SignupComponent4 from "../views/Auth/Signup4.vue";
import SignupComponent5 from "../views/Auth/Signup5.vue";

const routes = [
  {
    path: "/",
    component: LandingComponent,
  },
  {
    path: "/signin",
    component: SigninComponent,
  },
  {
    path: "/signup",
    component: SignupComponent,
  },
  {
    path: "/signup-2",
    component: SignupComponent2,
  },
  {
    path: "/signup-3",
    component: SignupComponent3,
  },
  {
    path: "/signup-4",
    component: SignupComponent4,
  },
  {
    path: "/signup-5",
    component: SignupComponent5,
  },
  {
    path: "/dashboard",
    component: () => import("../views/dashboard.vue"),
  },
  {
    path: "/module",
    component: () => import("../views/Module.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
