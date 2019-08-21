import Root from '../pages'
import Me from '../pages/me'
import Login from '../pages/login'
import Profile from '../pages/profile'
import Auth from '../pages/auth'
import Tracks from '../pages/playlists/tracks'
import MadeForYou from '../pages/playlists/madeforyou'

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
            path: '/me/playlists/:id',
            exact: true,
            component: Tracks
          },
          {
            path: '/me/madeforyou',
            exact: true,
            component: MadeForYou
          }
        ]
      }
    ]
  }
]

export default routes
