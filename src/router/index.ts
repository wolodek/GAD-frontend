import Vue from 'vue';
import VueRouter, { RouterOptions, RouteConfig } from 'vue-router';

Vue.use(VueRouter);

function loadView(view: string) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: loadView('Home'),
  },
  {
    path: '/news',
    name: 'news',
    component: loadView('News'),
  },
  {
    path: '/about',
    name: 'about',
    component: loadView('About'),
  },
  {
    path: '/faq',
    name: 'faq',
    component: loadView('Faq'),
  },
];
const options: RouterOptions = {
  base: process.env.BASE_URL,
  mode: 'history',
  routes,
};
export default new VueRouter(options);
