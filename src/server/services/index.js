import express from 'express'
import login from './login'
import { setToken } from './token'
import { account } from './user'

const router = express.Router()
const apiUri = '/proxy/api'

router.get(`${apiUri}/login`, login)
router.post(`${apiUri}/set-token`, setToken)
router.get(`${apiUri}/me`, account)

export default router
