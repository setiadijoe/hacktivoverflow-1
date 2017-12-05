import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import QuestionList from '@/components/QuestionList'
import QuestionDetail from '@/components/QuestionDetail'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/hacktivoverflow',
      component: HelloWorld,
      children: [
        {
          path: '',
          component: QuestionList
        },
        {
          path: ':id',
          component: QuestionDetail,
          props: true
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
    }
  ]
})
