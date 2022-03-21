import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/view/Home.vue'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/brazil', name: 'Brazil', component: () => import('@/view/Brazil.vue')},
  {path: '/hawaii', name: 'Hawaii', component: () => import('@/view/Hawaii.vue')},
  {path: '/jamaica', name: 'Jamaica', component: () => import('@/view/Jamaica.vue')},
  {path: '/panama', name: 'Panama', component: () => import('@/view/Panama.vue')}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router