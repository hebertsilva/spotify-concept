import redis from 'redis'

const [port, host] = [6379, 'localhost']
const client = redis.createClient({
  port: port,
  host: host,
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
