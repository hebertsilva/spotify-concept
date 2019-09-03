import { GET_PLAYLIST } from '../utils/constants'
import { setPlaylists } from '../actions/playlists'
import request from '../../utils/request'

const handleGetPlaylists = async (store, dispatch, action) => {
  dispatch(action)

  try {
    const { data, status } = await request().get('/playlists')

    if (status === 200) {
      store.dispatch(setPlaylists(data.items))
    } else {
      throw {}
    }
  } catch (err) {
    store.dispatch(setPlaylists(err))
  }
}

const handlers = {
  [GET_PLAYLIST]: handleGetPlaylists
}

export default function Playlist() {
  return store => dispatch => action => {
    const handler = handlers[action.type]

    if (typeof handler === 'function') {
      handler(store, dispatch, action)
    } else {
      dispatch(action)
    }
  }
}
