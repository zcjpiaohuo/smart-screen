/*
 * @Author: your name
 * @Date: 2021-08-16 18:35:10
 * @LastEditTime: 2021-08-17 16:54:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \smart-screen\src\router\index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect:'/government'
  },
  {
    path: '/government',
    name: 'Government',
    component: () => import('../pages/government/index.vue')
  },
  {
    path: '/traffic',
    name: 'Traffic',
    component: () => import('../pages/traffic/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
