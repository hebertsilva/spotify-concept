import querystring from 'querystring'
import request from './request'
import write from './write'

import { REDIRECT_URI, STATE_KEY } from './constants'

export const setToken = async (req, res, next) => {
  const { code, state } = req.body
  const storedState = req.cookies ? req.cookies[STATE_KEY] : null

  try {
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
        headers: write.genHeaders(req)
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
      } else {
        throw { data, status }
      }

      write.response(res, { authorization: true }, 200)
    }
  } catch (err) {
    write.response(res, err.data, err.status)
  }
}
