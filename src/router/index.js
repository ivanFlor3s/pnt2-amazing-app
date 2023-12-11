import { createRouter, createWebHistory } from 'vue-router'
import AppGame from '../pages/AppGame.vue'
import AppResult from '../pages/AppResult.vue'
import AppAuth from '../pages/AppAuth.vue'
import AppRoot from '../pages/AppRoot.vue'
import AppHome from '../pages/AppHome.vue'
import AppDashboard from '../pages/AppDashboard.vue'
import AppUsers from '../pages/AppUsers.vue'

//AUTH
import AppLogin from '../components/auth/AppLogin.vue'
import AppRegister from '../components/auth/AppRegister.vue'

import {validateJwt} from '../utils/validate-jwt.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth ',
      component: AppAuth,
      children: [
        { path: '/auth/login', component: AppLogin },
        { path: '/auth/register', component: AppRegister }
        // { path: '*', redirect: '/auth/login' }
      ]
    },
    {
      path: '/',
      component: AppRoot,
      children: [
        { path: '/home', component: AppHome },
        { path: '/dashboard', component: AppDashboard },
        { path: '/users', component: AppUsers }
      ]
    },
    { path: '/game', component: AppGame },
    { path: '/result', component: AppResult }
  ]
})

router.beforeEach((to) => {
  const inAuthPath = to.path.includes('/auth')
  const isAuthenticated = validateJwt()

  if (!inAuthPath && !isAuthenticated) {
    return '/auth/login'
  }
})

export default router
