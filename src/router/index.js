import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import user from '../store/user'

const routes = [
  { path: '/'           , name: 'Home'        , component: Home },
  { path: '/login'      , name: 'Login'       , component: () => import('../views/Login.vue') },
  { path: '/find-player', name: 'Find Player' , component: () => import('../views/Find-Player.vue'), meta : { requiresAuth : true }},
  { path: '/about'      , name: 'About'       , component: () => import('../views/About.vue') }
]

let router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !user.getters.isLoggedIn)
    return '/'
})

export default router
