import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import SalesView from '../views/SalesView.vue'
import FiltersView from '../views/FiltersView.vue'
import CompareView from '../views/CompareView.vue'
import PlacesView from '../views/PlacesView.vue'
import PayView from '../views/PayView.vue'

const routes = [
  {
    path: '/',
    name: 'filters',
    component: FiltersView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/sales',
    name: 'sales',
    component: SalesView
  },
  {
    path: '/compare',
    name: 'compare',
    component: CompareView
  },
  {
    path: '/places',
    name: 'places',
    component: PlacesView
  },
  {
    path: '/pay',
    name: 'pay',
    component: PayView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
