import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import simple from '../views/simple.vue'
import liste from '../views/liste.vue'
import listefetch from '../views/listefetch.vue'
import New from '../views/New.vue'
import listsupabase from '../views/listsupabase.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: Accueil },
    { path: '/simple', name: 'simple', component: simple },
    { path: '/liste', name: 'liste', component: liste },
    { path: '/listefetch', name: 'listefetch', component: listefetch },
    { path: '/New', name: 'New', component: New },
    { path: '/listsupabase', name: 'listsupabase', component: listsupabase },

  ]
})

export default router