import { GET_PLAYLIST } from '../utils/constants'

const STORE_TESTE = 'STORE_TESTE'

const handleGetPlaylists = async (store, dispatch, action) => {
  dispatch(action)

  console.log('### action handleGetPlaylists =>', action)
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
