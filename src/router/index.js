import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Ebook from '@/Ebook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Ebook'
    },
    {
      path: '/Ebook',
      name: 'Ebook componet',
      component: Ebook
    }
  ]
})
