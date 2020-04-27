import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'hello',
    component: () => import('../components/HelloWorld.vue')
  },
  {
    path: '/tryout-menu',
    name: 'tryout-menu',
    component: () => import('../views/tryout_menu.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
