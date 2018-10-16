import Vue from 'vue'
import Router from 'vue-router'
import testPage from '@/pages/testPage/testPage'
import about from '../pages/testPage/aboutus'
import recruit from '../pages/testPage/recruit'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: testPage,
    },
    {
      path: '/index',
      name: 'index',
      component: testPage,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    },
    {
      path: '/recruit',
      name: 'recruit',
      component: recruit,
    }
  ]
})
