import Root from '../pages'
import Me from '../pages/me'
import Login from '../pages/login'
import Profile from '../pages/profile'
import Auth from '../pages/auth'
import Playlits from '../pages/album/playlist'

const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Login
      },
      {
        path: '/me/authorize',
        exact: true,
        component: Auth
      },
      {
        path: '/me',
        component: Me,
        routes: [
          {
            path: '/me/',
            exact: true,
            component: Profile
          },
          {
            path: '/me/playlits',
            exact: true,
            component: Playlits
          }
        ]
      }
    ]
  }
]

export default routes
