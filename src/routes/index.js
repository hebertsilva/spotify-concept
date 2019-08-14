import Root from '../pages'
import Home from '../pages/home'
import Auth from '../pages/auth'
import Dashboard from '../pages/dashboard'

const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/authorize',
        exact: true,
        component: Auth
      },
      {
        path: '/dashboard',
        exact: true,
        component: Dashboard
      }
    ]
  }
]

export default routes
