import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: () => import('@/containers/DefaultContainer'),
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: () => import('@/views/Dashboard')
        },
        {
          path: 'theme',
          redirect: '/theme/colors',
          name: 'Theme',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'colors',
              name: 'Colors',
              component: () => import('@/views/theme/Colors')
            },
            {
              path: 'typography',
              name: 'Typography',
              component: () => import('@/views/theme/Typography')
            }
          ]
        },
        {
          path: 'charts',
          name: 'Charts',
          component: () => import('@/views/Charts')
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: () => import('@/views/Widgets')
        },
        {
          path: 'users',
          meta: {
            label: 'Users'
          },
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: () => import('@/views/users/Users')
            },
            {
              path: ':id',
              meta: {
                label: 'User Details'
              },
              name: 'User',
              component: () => import('@/views/users/User')
            }
          ]
        },
        {
          path: 'base',
          redirect: '/base/cards',
          name: 'Base',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'cards',
              name: 'Cards',
              component: () => import('@/views/base/Cards')
            },
            {
              path: 'forms',
              name: 'Forms',
              component: () => import('@/views/base/Forms')
            },
            {
              path: 'switches',
              name: 'Switches',
              component: () => import('@/views/base/Switches')
            },
            {
              path: 'tables',
              name: 'Tables',
              component: () => import('@/views/base/Tables')
            },
            {
              path: 'tabs',
              name: 'Tabs',
              component: () => import('@/views/base/Tabs')
            },
            {
              path: 'breadcrumbs',
              name: 'Breadcrumbs',
              component: () => import('@/views/base/Breadcrumbs')
            },
            {
              path: 'carousels',
              name: 'Carousels',
              component: () => import('@/views/base/Carousels')
            },
            {
              path: 'collapses',
              name: 'Collapses',
              component: () => import('@/views/base/Collapses')
            },
            {
              path: 'jumbotrons',
              name: 'Jumbotrons',
              component: () => import('@/views/base/Jumbotrons')
            },
            {
              path: 'list-groups',
              name: 'List Groups',
              component: () => import('@/views/base/ListGroups')
            },
            {
              path: 'navs',
              name: 'Navs',
              component: () => import('@/views/base/Navs')
            },
            {
              path: 'navbars',
              name: 'Navbars',
              component: () => import('@/views/base/Navbars')
            },
            {
              path: 'paginations',
              name: 'Paginations',
              component: () => import('@/views/base/Paginations')
            },
            {
              path: 'popovers',
              name: 'Popovers',
              component: () => import('@/views/base/Popovers')
            },
            {
              path: 'progress-bars',
              name: 'Progress Bars',
              component: () => import('@/views/base/ProgressBars')
            },
            {
              path: 'tooltips',
              name: 'Tooltips',
              component: () => import('@/views/base/Tooltips')
            }
          ]
        },
        {
          path: 'buttons',
          redirect: '/buttons/standard-buttons',
          name: 'Buttons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'standard-buttons',
              name: 'Standard Buttons',
              component: () => import('@/views/buttons/StandardButtons')
            },
            {
              path: 'button-groups',
              name: 'Button Groups',
              component: () => import('@/views/buttons/ButtonGroups')
            },
            {
              path: 'dropdowns',
              name: 'Dropdowns',
              component: () => import('@/views/buttons/Dropdowns')
            },
            {
              path: 'brand-buttons',
              name: 'Brand Buttons',
              component: () => import('@/views/buttons/BrandButtons')
            }
          ]
        },
        {
          path: 'icons',
          redirect: '/icons/font-awesome',
          name: 'Icons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'coreui-icons',
              name: 'CoreUI Icons',
              component: () => import('@/views/icons/CoreUIIcons')
            },
            {
              path: 'flags',
              name: 'Flags',
              component: () => import('@/views/icons/Flags')
            },
            {
              path: 'font-awesome',
              name: 'Font Awesome',
              component: () => import('@/views/icons/FontAwesome')
            },
            {
              path: 'simple-line-icons',
              name: 'Simple Line Icons',
              component: () => import('@/views/icons/SimpleLineIcons')
            }
          ]
        },
        {
          path: 'notifications',
          redirect: '/notifications/alerts',
          name: 'Notifications',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'alerts',
              name: 'Alerts',
              component: () => import('@/views/notifications/Alerts')
            },
            {
              path: 'badges',
              name: 'Badges',
              component: () => import('@/views/notifications/Badges')
            },
            {
              path: 'modals',
              name: 'Modals',
              component: () => import('@/views/notifications/Modals')
            }
          ]
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: () => import('@/views/pages/Page404')
        },
        {
          path: '500',
          name: 'Page500',
          component: () => import('@/views/pages/Page500')
        },
        {
          path: 'login',
          name: 'Login',
          component: () => import('@/views/pages/Login')
        },
        {
          path: 'register',
          name: 'Register',
          component: () => import('@/views/pages/Register')
        }
      ]
    },
    {
      path: '/hot-export',
      name: 'hot-export',
      component: () => import('@/wallet/Hot-export')
    },
    {
      path: '/cold',
      name: 'wallet-cold',
      component: () => import('@/wallet/Hot')
    }
  ]
})
