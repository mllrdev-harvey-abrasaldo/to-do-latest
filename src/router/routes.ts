import type  {RouteRecordRaw}  from 'vue-router'
import { RouteName } from '@/constants/route-names'

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },

  {
    path: "/home",
    name: RouteName.Home,
    component: () => import("../views/Home.vue"),
  },

  {
    path: "/todo",
    name: RouteName.Todo,
    component: () => import("../views/ToDo.vue"),
  },
];

export default routes;