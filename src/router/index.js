import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Ebook from '@/Ebook'
import Test1 from '@/components/Test1'

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
    },
    {
      path: '/test1',
      name: 'This is a test.',
      component: Test1
    }
  ]
})
