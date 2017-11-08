import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import QuestionList from '@/components/QuestionList'
import AddQuestion from '@/components/AddQuestion'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld,
      children: [
      {
        path: '',
        component: QuestionList
      }
      ]
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/addquestion',
      component: AddQuestion
    }
  ]
})
