import { createWebHistory, createRouter } from "vue-router";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import NotFound from "./components/NotFound.vue";

// Lazy loaded pages
// const Tenants = () => import("./components/Tenants.vue")
const Profile = () => import("./components/Profile.vue")
const AdminBoard = () => import("./components/AdminBoard.vue")

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
    props: { userToEdit: {} }
  },
  {
    path: "/profile/edit",
    name: 'editProfile',
    component: Register,
    props: (route) => ({
      userToEdit: route.params
    })
  },
  {
    path: "/tenants",
    component: Profile,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/admin",
    component: AdminBoard,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;