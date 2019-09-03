import { GET_PLAYLIST } from '../utils/constants'

export const getPlaylists = () => ({
  type: GET_PLAYLIST,
  payload: { isLoading: true }
})

export default {
  getPlaylists
}
