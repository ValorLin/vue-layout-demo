import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Jumbotron from '@/components/Layouts/Jumbotron'
import Narrow from '@/components/Layouts/Narrow'
import Empty from '@/components/Layouts/Empty'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/narrow-jumbotron'
  }, {
    path: '/narrow-jumbotron',
    name: 'narrow-jumbotron',
    components: {
      default: Home,
      layout: Narrow
    }
  }, {
    path: '/jumbotron',
    name: 'jumbotron',
    components: {
      default: Home,
      layout: Jumbotron
    }
  }, {
    path: '/empty',
    name: 'empty',
    components: {
      default: Home,
      layout: Empty
    }
  }]
})
