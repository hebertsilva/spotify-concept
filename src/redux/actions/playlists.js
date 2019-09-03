import { GET_PLAYLIST, SET_PLAYLIST } from '../utils/constants'

export const getPlaylists = () => ({
  type: GET_PLAYLIST,
  payload: { isLoading: true }
})

export const setPlaylists = data => ({
  type: SET_PLAYLIST,
  payload: { isLoading: false, all: data }
})

export default {
  getPlaylists,
  setPlaylists
}
