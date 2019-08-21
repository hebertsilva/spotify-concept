import path from 'path'
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

const port = process.env.PORT || 3001

if (process.env.NODE_ENV === 'production') {
  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../../build')))

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../../build', 'index.html'))
  })
}

app.listen(port, () => console.info(`Listening on port ${port}`))

export default app
