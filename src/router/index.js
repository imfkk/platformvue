import Vue from 'vue'
import Router from 'vue-router'
import vueResource from 'vue-resource'
import login from '@/components/login'
import index from '@/components/index'

Vue.use(Router)
Vue.use(vueResource)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})
