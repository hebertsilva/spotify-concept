import querystring from 'querystring'
import request from './request'
import { REDIRECT_URI, STATE_KEY, API_BASE } from './constants'

export const all = async (req, res, next) => {
  const { access_token } = req.session.accounts

  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  }

  const response = await request(API_BASE).get('/me/playlists', config)

  res.send({ playlist: response.data })
}
