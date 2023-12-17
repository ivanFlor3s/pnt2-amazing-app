import { createRouter, createWebHistory } from 'vue-router'
import AppGame from '../pages/AppGame.vue'
import AppResult from '../pages/AppResult.vue'
import AppAuth from '../pages/AppAuth.vue'
import AppRoot from '../pages/AppRoot.vue'
import AppHome from '../pages/AppHome.vue'
import AppUsers from '../pages/AppUsers.vue'
import AppProfile from '../pages/AppProfile.vue'

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
      ]
    },
    {
      path: '/',
      component: AppRoot,
      children: [
        { path: '/home', component: AppHome },
        { path: '/game', component: AppGame },
        { path: '/result', component: AppResult },
        { path: '/users', component: AppUsers },
        { path: '/profile', component: AppProfile}
      ]
    },
    
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
