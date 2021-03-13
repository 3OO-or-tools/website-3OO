import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import user from '../store/user'

const routes = [
  { path: '/'         , name: 'Home'      , component: Home },
  { path: '/login'    , name: 'Login'     , component: () => import('../views/Login.vue') },
  { path: '/dashboard', name: 'Dashboard' , component: () => import('../views/Dashboard.vue'), meta : { requiresAuth : true }},
  { path: '/about'    , name: 'About'     , component: () => import('../views/Dashboard.vue') }
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
