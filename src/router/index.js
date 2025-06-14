import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/', component: Home, meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('loggedIn') === 'true'
  if (to.meta.requiresAuth && !loggedIn) {
    next('/login')
  } else if (to.path === '/login' && loggedIn) {
    next('/')
  } else {
    next()
  }
})

export default router
