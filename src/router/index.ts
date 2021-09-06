import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import PorfolioView from '../views/PorfolioView.vue'
import About from '../views/About.vue'
import TickerList from '../views/TickerList.vue'


const routes : Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/porfolio',
    name: 'PorfolioView',
    component: PorfolioView
  },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path: '/tickerList',
    name: 'tickerListView',
    component:TickerList
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
