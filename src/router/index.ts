/*
 * @Author: 宋绍华
 * @Date: 2022-08-22 10:26:39
 * @LastEditTime: 2022-08-24 17:12:48
 * @LastEditors: 宋绍华
 * @Description:
 * @FilePath: \docguide\src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/entry',
    name: 'Entry',
    component: () => import(/* webpackChunkName: "about" */ '../views/entry.vue')
  },
  {
    path: '/hospital',
    name: 'Hospital',
    component: () => import(/* webpackChunkName: "about" */ '../views/hospital.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
