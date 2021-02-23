import Vue from 'vue';
import VueRouter from 'vue-router';
import Register from '../views/auth/Register.vue';
import Login from '../views/auth/Login.vue';
import AllGalleries from "../views/galleries/AllGalleries";
import MyGalleries from "../views/galleries/MyGalleries";
import CreateGallery from "../views/galleries/CreateGallery";
import AuthorsGalleries from "../views/galleries/AuthorsGalleries";
import Gallery from "../views/galleries/Gallery";
import { globalAuthGuard } from "../guards/authGuard";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AllGalleries',
    component: AllGalleries
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
  {
    path: '/create',
    name: 'Create',
    component: CreateGallery,
    meta: { authRequired: true },
  },
  {
    path: '/my-galleries',
    name: 'MyGalleries',
    component: MyGalleries,
    meta: { authRequired: true },
  },
  {
    path: '/galleries/:id',
    name: 'Gallery',
    component: Gallery,
    meta: { authRequired: true },
  },
  {
    path: '/authors/:id',
    name: 'AuthorsGalleries',
    component: AuthorsGalleries,
    meta: { authRequired: true },
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(globalAuthGuard);
export default router
