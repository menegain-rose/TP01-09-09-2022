import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import simple from '../views/simple.vue'
import liste from '../views/liste.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: Accueil },
    { path: '/simple', name: 'simple', component: simple },
    { path: '/liste', name: 'liste', component: liste },

  ]
})

export default router