import querystring from 'querystring'
import request from './request'
import write from './write'
import { API_BASE } from './constants'

export const playlists = async (req, res, next) => {
  try {
    const config = write.genHeaders(req, 'Bearer')

    const { data, status } = await request(API_BASE).get(
      '/me/playlists',
      config
    )

    if (!data.status === 200) {
      throw { data, status }
    }

    write.response(res, data, status)
  } catch (err) {
    write.response(res, err.data, err.status)
  }
}

export const tracks = async (req, res, next) => {
  try {
    const config = write.genHeaders(req, 'Bearer')
    const id = req.params.id

    const { data, status } = await request(API_BASE).get(
      `/playlists/${id}`,
      config
    )

    if (!data.status === 200) {
      throw { data, status }
    }

    write.response(res, data, status)
  } catch (err) {
    write.response(res, err.data, err.status)
  }
}
