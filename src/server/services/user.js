import querystring from 'querystring'
import request from './request'
import { REDIRECT_URI, STATE_KEY, API_BASE } from './constants'

export const account = async (req, res, next) => {
  const { access_token, refresh_token } = req.session.accounts

  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  }

  const { data, status } = await request(API_BASE).get('/me', config)

  console.log('## data (account) =>', data)

  res.send({ account: data })
}
