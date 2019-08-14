import Root from '../pages'
import Home from '../pages/home'
import Auth from '../pages/auth'
import Profile from '../pages/profile'

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
        path: '/profile',
        exact: true,
        component: Profile
      }
    ]
  }
]

export default routes
