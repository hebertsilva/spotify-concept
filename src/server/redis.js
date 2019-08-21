import redis from 'redis'

require('dotenv').config()

const PORT = process.env.REDIS_PORT || 6379
const HOST = process.env.REDIS_HOST || 'localhost'

const client = redis.createClient({
  port: PORT,
  host: HOST,
  db: 0
})

client.on('error', err => {
  if (err.toString().includes('ECONNREFUSED')) {
    console.info(`Error connecting to Redis server at ${HOST}:${PORT}`)
  } else {
    console.error(err)
  }
})

client.on('connect', () => {
  console.info(`Connected to Redis server at ${HOST}:${PORT}`)
})

export default client
