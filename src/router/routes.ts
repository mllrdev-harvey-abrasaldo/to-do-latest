import type  {RouteRecordRaw}  from 'vue-router'
import { RouteName } from '@/constants/route-names'

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home-page.vue"),
  },

  {
    path: "/home",
    name: RouteName.Home,
    component: () => import("../views/home-page.vue"),
  },

  {
    path: "/todo",
    name: RouteName.Todo,
    component: () => import("../views/to-do-page.vue"),
  },
];

export default routes;