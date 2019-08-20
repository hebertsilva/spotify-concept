import express from 'express'
import services from './services'
import session from './session'
import cookieParse from 'cookie-parser'

require('dotenv').config()

const app = express()
const router = express.Router()

app.proxy = true

app.use(express.json())
app.use(cookieParse())
app.use(session)
app.use(router)
app.use(services)

const port = process.env.PORT || 3001
const host = process.env.HOST || '0.0.0.0'
app.listen(port, host, () => console.info(`Listening on port ${port}`))

export default app
