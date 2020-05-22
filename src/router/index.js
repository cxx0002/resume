import Vue from 'vue'
import Router from 'vue-router'
import Cxx from '@/iview/cxx'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cxx',
      component: Cxx
    }
  ]
})
