import express from 'express'
import login from './login'
import signout from './signout'
import {
  playlists,
  tracks,
  recommendations,
  albums,
  recents
} from './playlists'
import { setToken } from './token'
import { account, following } from './user'

const router = express.Router()
const apiUri = '/proxy/api'

router.get(`${apiUri}/login`, login)
router.post(`${apiUri}/signout`, signout)
router.post(`${apiUri}/set-token`, setToken)
router.get(`${apiUri}/me`, account)
router.get(`${apiUri}/following`, following)
router.get(`${apiUri}/playlists`, playlists)
router.get(`${apiUri}/playlists/:id`, tracks)
router.get(`${apiUri}/recommendations`, recommendations)
router.get(`${apiUri}/albums`, albums)
router.get(`${apiUri}/recents`, recents)

export default router
