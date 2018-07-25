import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: r => require.ensure([], () => r(require('@/page/welcome')), 'welcome')
    },
    {
      path: '/login',
      name: 'login',
      component: r => require.ensure([], () => r(require('@/page/login')), 'login')
    },
    {
      path: '/home',
      name: 'home',
      component: r => require.ensure([], () => r(require('@/page/home')), 'home'),
      children: [
        {
          path: '/',
          name: '',
          meta: [],
          component: r => require.ensure([], () => r(require('@/page/manage/index')),'index')
        },
        {
          path: '/userlist',
          name: 'userlist',
          meta: ['数据管理', '用户列表'],
          component: r => require.ensure([], () => r(require('@/page/manage/userList')),'userlist')
        }
      ]

    }
  ]
})
