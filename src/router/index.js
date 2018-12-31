import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home'
import New from '@/components/New/New'
import Api from '@/components/Api/Api'
import About from '@/components/About/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/new',
      name: 'new',
      component:New
    },
    {
      path: '/api',
      name: 'api',
      component: Api
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
