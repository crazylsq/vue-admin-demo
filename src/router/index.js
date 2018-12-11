import Vue from 'vue'
import Router from 'vue-router'
import { getToken } from '@/utils/auth'
import { verifyToken } from '@/api/verify_token'
import Layout from '@/views/Layout/index'

Vue.use(Router)

const routes = [
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import('@/views/Login/index')
  },
  {
    path: '/',
    component: Layout,
    redirect: 'dashboard',
    name: 'Dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/Dashboard/index'),
        meta: {
          requireAuth: true,
          keepAlive: false,
          icon: 'el-icon-menu'
        }
      }
    ]
  },
  {
    path: '/menu1',
    component: Layout,
    redirect: '/menu1/menu1-1/xxx',
    name: 'menu1',
    meta: {
      requireAuth: true,
      title: '菜单一',
      icon: 'el-icon-message'
    },
    children: [
      {
        path: 'menu1-1',
        name: 'menu1-1',
        redirect: '/menu1/menu1-1/xxx',
        component: () => import('@/views/menu/menu1/index'),
        meta: {
          requireAuth: true,
          keepAlive: false,
          title: '菜单1-1'
        },
        children: [
          {
            path: 'xxx',
            name: 'Xxx',
            component: () => import('@/views/menu/menu1/menu1-1/xx'),
            meta: {
              requireAuth: true,
              keepAlive: false,
              title: 'Xxx'
            }
          },
          {
            path: 'yyy',
            name: 'Yyy',
            component: () => import('@/views/menu/menu1/menu1-1/yy'),
            meta: {
              requireAuth: true,
              keepAlive: false,
              title: 'Yyy'
            }
          }
        ]
      },
      {
        path: 'menu1-2',
        name: '菜单1-2',
        component: () => import('@/views/menu/menu1/menu1-2'),
        meta: {
          requireAuth: true,
          keepAlive: false,
          title: '菜单1-2'
        }
      }
    ]
  },
  {
    path: '/menu2',
    component: Layout,
    redirect: '/menu2/menu2-1',
    meta: {
      requireAuth: true,
      title: '菜单二',
      icon: 'el-icon-message'
    },
    children: [
      {
        path: 'menu2-1',
        name: '菜单2-1',
        component: () => import('@/views/menu/menu2/menu2-1'),
        meta: {
          requireAuth: true,
          keepAlive: false,
          title: '菜单2-1'
        }
      },
      {
        path: 'menu2-2',
        name: '菜单2-2',
        component: () => import('@/views/menu/menu2/menu2-2'),
        meta: {
          requireAuth: true,
          keepAlive: true,
          title: '菜单2-2'
        }
      }
    ]
  },
  {
    path: '/menu3',
    component: Layout,
    name: 'menu3',
    redirect: '/menu3/menu3-1/menu3-1-1/menu3-1-1-1',
    meta: {
      requireAuth: true,
      title: '菜单三',
      icon: 'el-icon-message'
    },
    children: [
      {
        path: 'menu3-1',
        name: '菜单3-1',
        redirect: '/menu3/menu3-1/menu3-1-1/menu3-1-1-1',
        component: () => import('@/views/menu/menu3'),
        meta: {
          requireAuth: true,
          keepAlive: false,
          title: '菜单3-1'
        },
        children: [
          {
            path: 'menu3-1-1',
            name: '菜单3-1-1',
            redirect: '/menu3/menu3-1/menu3-1-1/menu3-1-1-1',
            component: () => import('@/views/menu/menu3/menu3-1'),
            meta: {
              requireAuth: true,
              keepAlive: false,
              title: '菜单3-1-1'
            },
            children: [
              {
                path: 'menu3-1-1-1',
                name: '菜单3-1-1-1',
                component: () => import('@/views/menu/menu3/menu3-1/menu3-1-1'),
                meta: {
                  requireAuth: true,
                  keepAlive: false,
                  title: '菜单3-1-1-1'
                }
              },
              {
                path: 'menu3-1-1-2',
                name: '菜单3-1-1-2',
                component: () => import('@/views/menu/menu3/menu3-1/menu3-1-2'),
                meta: {
                  requireAuth: true,
                  keepAlive: false,
                  title: '菜单3-1-1-2'
                }
              }
            ]
          },
          {
            path: 'menu3-1-2',
            name: 'menu3-1-2',
            component: () => import('@/views/menu/menu3/menu3-1/menu3-1-2'),
            meta: {
              requireAuth: true,
              keepAlive: false,
              title: 'menu3-1-2'
            }
          }
        ]
      },
      {
        path: 'menu3-2',
        name: '菜单3-2',
        component: () => import('@/views/menu/menu3/menu3-2'),
        meta: {
          requireAuth: true,
          keepAlive: false,
          title: '菜单3-2'
        }
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  }
]

const route = new Router({
  mode: 'history',
  routes: routes
})

route.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next({
      path: '/404'
    })
  } else if (to.meta.requireAuth) {
    const token = getToken()
    if (token) {
      verifyToken(token)
        .then(res => {
          if (res.data.code === 200) {
            next()
          } else {
            next({
              path: '/login',
              query: { redirect: to.fullPath }
            })
          }
        })
        .catch(error => {
          console.log('beforeEach', error)
        })
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

export default route
