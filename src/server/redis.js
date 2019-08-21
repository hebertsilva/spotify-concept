import redis from 'redis'

require('dotenv').config()

const [port, host] = [process.env.REDIS_PORT, process.env.REDIS_HOST]
const client = redis.createClient({
  port: port || 6379,
  host: host || 'localhost',
  db: 0
})

client.on('error', err => {
  if (err.toString().includes('ECONNREFUSED')) {
    console.info(`Error connecting to Redis server at ${host}:${port}`)
  } else {
    consola.error(err)
  }
})

client.on('connect', () => {
  console.info(`Connected to Redis server at ${host}:${port}`)
})

export default client
