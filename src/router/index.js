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
    path: '/tryout',
    name: 'tryout-menu',
    component: () => import('../views/tryout_menu.vue'),
  },
  {
    path: '/tryout/1',
    name: 'tryout-page',
    component: () => import('../views/tryout_page/index.vue')
  }
];

const router = new VueRouter({
  routes,
});

export default router;
