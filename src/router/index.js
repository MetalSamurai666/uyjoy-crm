import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RoomsView from '../views/RoomsView.vue'
import SaleView from '../views/SaleView.vue'
import UsersView from '../views/UsersView.vue'
import TransictionsView from '../views/TransictionsView.vue'
import SalariesView from '../views/SalariesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/rooms',
    name: 'rooms',
    component: RoomsView
  },
  {
    path: '/sale',
    name: 'sale',
    component: SaleView
  },
  {
    path: '/users',
    name: 'users',
    component: UsersView
  },
  {
    path: '/transictions',
    name: 'transictions',
    component: TransictionsView
  },
  {
    path: '/salaries',
    name: 'salaries',
    component: SalariesView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
