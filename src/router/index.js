import { createRouter, createWebHistory } from 'vue-router'
import AppGame from '../pages/AppGame.vue'
import AppResult from '../pages/AppResult.vue'
import AppAuth from '../pages/AppAuth.vue'

//AUTH
import AppLogin from '../components/auth/AppLogin.vue'
import AppRegister from '../components/auth/AppRegister.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth ',
      component: AppAuth,
      children: [
        { path: '/auth/login', component: AppLogin },
        { path: '/auth/register', component: AppRegister },
        // { path: '*', redirect: '/auth/login' }
      ]
    },
    { path: '/game', component: AppGame },
    { path: '/result', component: AppResult }
  ]
})

export default router
