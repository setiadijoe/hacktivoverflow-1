import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
