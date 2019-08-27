import request from './request'
import write from './write'
import { API_BASE } from './constants'

export const account = async (req, res, next) => {
  const { accounts } = req.session

  try {
    if (!accounts) {
      throw { error: '401 Unauthorized', status: 401 }
    }

    const config = write.genHeaders(req, 'Bearer')

    const { data, status } = await request(API_BASE).get('/me', config)

    if (!data.status === 200) {
      throw { data, status }
    }

    write.response(res, data, status)
  } catch (err) {
    write.response(res, err, err.status)
  }
}

export const following = async (req, res, next) => {
  const { accounts } = req.session

  try {
    if (!accounts) {
      throw { error: '401 Unauthorized', status: 401 }
    }

    const config = write.genHeaders(req, 'Bearer')
    const params = {
      type: 'user'
    }

    const { data, status } = await request(API_BASE).get(
      '/me/following/contains',
      config,
      params
    )

    if (!data.status === 200) {
      throw { data, status }
    }

    write.response(res, data, status)
  } catch (err) {
    write.response(res, err, err.status)
  }
}
