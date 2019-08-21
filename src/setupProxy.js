const proxy = require('http-proxy-middleware')

require('dotenv').config()

module.exports = function(app) {
  app.use(proxy('/proxy/api', { target: process.env.PROXY_URL }))
}
