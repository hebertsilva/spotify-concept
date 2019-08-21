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
    const params = req.query

    const { data, status } = await request(API_BASE).get(
      `/playlists/${id}`,
      config,
      params
    )

    if (!data.status === 200) {
      throw { data, status }
    }

    write.response(res, data, status)
  } catch (err) {
    write.response(res, err.data, err.status)
  }
}

export const recommendations = async (req, res) => {
  try {
    const config = write.genHeaders(req, 'Bearer')

    const { data, status } = await request(API_BASE).get(
      `/audio-features`,
      config
    )

    console.log('### recommendations (data) =>', data)

    if (!data.status === 200) {
      throw { data, status }
    }

    write.response(res, data, status)
  } catch (err) {
    write.response(res, err.data, err.status)
  }
}
