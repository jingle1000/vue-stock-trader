import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: "/buy",
      name: "buy",
      component: () => import('./views/Buy.vue')
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import('./views/Portfolio.vue')
    },
    {
      path: "/complaint",
      name: "complaint",
      component: () => import('./views/FileComplaint.vue')
    }
  ]
})
