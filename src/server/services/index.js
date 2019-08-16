import express from 'express'
import login from './login'
import signout from './signout'
import { all } from './playlist'
import { setToken } from './token'
import { account } from './user'

const router = express.Router()
const apiUri = '/proxy/api'

router.get(`${apiUri}/login`, login)
router.post(`${apiUri}/signout`, signout)
router.post(`${apiUri}/set-token`, setToken)
router.get(`${apiUri}/me`, account)
router.get(`${apiUri}/playlist`, all)

export default router
