import express from 'express'
import services from './services'
import session from './session'
import cookieParse from 'cookie-parser'

require('dotenv').config()

const app = express()
const router = express.Router()

app.use(express.json())
app.use(cookieParse())
app.use(session)
app.use(router)
app.use(services)

const port = 3001
app.listen(port, () => console.log(`Listening on port ${port}`))

export default app
