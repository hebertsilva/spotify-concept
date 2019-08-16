import querystring from 'querystring'
import request from './request'
import { REDIRECT_URI, STATE_KEY } from './constants'

export const setToken = async (req, res, next) => {
  const { code, state } = req.body
  const storedState = req.cookies ? req.cookies[STATE_KEY] : null

  if (state === null || state !== storedState) {
    res.send(
      '/#' +
        querystring.stringify({
          error: 'state_mismatch'
        })
    )
  } else {
    res.clearCookie(STATE_KEY)
    const params = {
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: REDIRECT_URI
    }

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    // Get credentials token
    const { data, status } = await request().post(
      '/api/token',
      querystring.stringify(params),
      config
    )

    // Set toquen in session
    if (status === 200) {
      req.session.accounts = data
    }

    res.send({ authorization: status === 200 ? true : false })
  }
}
