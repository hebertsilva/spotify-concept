import express from 'express'
import login from './login'
import { setToken } from './token'
import { account } from './user'

const router = express.Router()

router.get('/api/login', login)
router.post('/api/set-token', setToken)
router.get('/api/me', account)

export default router
