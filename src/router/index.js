import { createRouter, createWebHistory } from 'vue-router'
import AppLogin from '../pages/AppLogin.vue'
import AppGame from '../pages/AppGame.vue'
import AppResult from '../pages/AppResult.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: AppLogin },
    { path: '/game', component: AppGame },
    { path: '/result', component: AppResult }
  ]
})

export default router
