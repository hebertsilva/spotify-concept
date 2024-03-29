import Root from '../pages'
import Me from '../pages/me'
import Login from '../pages/login'
import ProfileContainer from '../pages/profile/Container'
import Auth from '../pages/auth'
import Tracks from '../pages/playlists/tracks'
import Artists from '../pages/playlists/artists'
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
            component: ProfileContainer
          },
          {
            path: '/me/playlists/:id',
            exact: true,
            component: Tracks
          },
          {
            path: '/me/top-artists',
            exact: true,
            component: Artists
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
