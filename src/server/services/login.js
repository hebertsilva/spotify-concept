import querystring from 'querystring'
import {
  CLIENT_ID,
  STATE_KEY,
  REDIRECT_URI,
  API_BASE_ACCOUNTS
} from './constants'

function generateRandomString(length) {
  let text = ''
  let possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return text
}

export default function(req, res, next) {
  const state = generateRandomString(16)
  res.cookie(STATE_KEY, state)

  const scope = 'user-read-private user-read-email'
  const query = querystring.stringify({
    response_type: 'code',
    client_id: CLIENT_ID,
    scope: scope,
    redirect_uri: REDIRECT_URI,
    state: state
  })

  res.send(`${API_BASE_ACCOUNTS}/authorize?${query}`)
}
