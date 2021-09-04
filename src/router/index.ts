import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'
import PorfolioView from '../views/PorfolioView.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Porfolio',
    name: 'PorfolioView',
    component: PorfolioView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
