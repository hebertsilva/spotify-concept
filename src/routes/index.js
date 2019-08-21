import Root from '../pages'
import Me from '../pages/me'
import Login from '../pages/login'
import Profile from '../pages/profile'
import Auth from '../pages/auth'
import Tracks from '../pages/playlists/tracks'
import MadeForYou from '../pages/playlists/madeforyou'
import Albums from '../pages/playlists/albums'
import Recents from '../pages/playlists/recents'

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
          },
          {
            path: '/me/albums',
            exact: true,
            component: Albums
          },
          {
            path: '/me/recents',
            exact: true,
            component: Recents
          }
        ]
      }
    ]
  }
]

export default routes
