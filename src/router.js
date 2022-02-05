import { createWebHistory, createRouter } from "vue-router";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";

const Profile = () => import("./components/Profile.vue")
const AdminBoard = () => import("./components/AdminBoard.vue")

const routes = [
  {
    path: "/",
    name: "home",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminBoard,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;