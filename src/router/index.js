import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/auth/Register.vue';
import Login from '../views/auth/Login.vue';
import { globalAuthGuard } from "../guards/authGuard";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { guestRequired: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { guestRequired: true },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(globalAuthGuard);
export default router
